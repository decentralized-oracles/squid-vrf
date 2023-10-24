import { lookupArchive } from "@subsquid/archive-registry"
import * as ss58 from "@subsquid/ss58"
import {toHex} from "@subsquid/util-internal-hex"
import {BatchContext, BatchProcessorItem, SubstrateBatchProcessor} from "@subsquid/substrate-processor"
import {Store, TypeormDatabase} from "@subsquid/typeorm-store"
import {In} from "typeorm"
import * as vrf_consumer from "./abi/vrf_consumer"
import {RandomValue} from "./model"
 
import { khalaDev } from "@phala/typedefs";

import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { typeDefinitions } from '@polkadot/types'
import { types as phalaSDKTypes } from "@phala/sdk";
import { PinkContractPromise, OnChainRegistry, signCertificate } from '@phala/sdk'

import vrf_oracle_phat from "./abi/vrf_oracle_phat.json";
import { AnyJson } from "@polkadot/types/types"

const CONTRACT_ADDRESS_SS58 = 'aesULxtrttD4VGe1oDWGnDihbknjQ44GYwN1L8RXMcWZxis'
const CONTRACT_ADDRESS = toHex(ss58.decode(CONTRACT_ADDRESS_SS58).bytes)
const SS58_PREFIX = ss58.decode(CONTRACT_ADDRESS_SS58).prefix
 
 
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        archive: lookupArchive("shibuya", { release: "FireSquid" })
    })
    .addContractsContractEmitted(CONTRACT_ADDRESS, {
        data: {
            event: {args: true},
        },
        range: {
            from: 4_718_323 // first event on contract
        }
    } as const)
 
 
type Item = BatchProcessorItem<typeof processor>
type Ctx = BatchContext<Store, Item>
 
interface Requested {
    id: string,
    requestorId: string,
    requestorTimestamp: Date,
    nonce: bigint,
    min: bigint,
    max: bigint,
}
interface Received {
    id: string,
    requestorId: string,
    nonce: bigint,
    randomValue: bigint,
    receivedTimestamp: Date
}  

let provider;
let api: ApiPromise;
let contract: PinkContractPromise; 
let pair: any;
let cert: any;

processor.run(new TypeormDatabase(), async ctx => {

    // PHAT_TODO: Create Phala API
    if (!api) {
        provider = new WsProvider("wss://poc5.phala.network/ws");
        api = await ApiPromise.create({ 
            provider,
            types: {
                ...khalaDev,
                ...phalaSDKTypes,
              }
        });
    }
    
    // PHAT_TODO:Connect to contract
    if (!contract) {
        try {
            pair = new Keyring({ type: 'sr25519' }).addFromUri("//Alice")
            const contractId = "0xa6c5baac29ef1e1bdfd6a5d2172d5cd85e4351497f7bd2b1a33c8c7be8b53feb";
        
            const phatRegistry = await OnChainRegistry.create(api)
            const abi = JSON.parse(JSON.stringify(vrf_oracle_phat))
            const contractKey = await phatRegistry.getContractKey(contractId)
            //console.log("contractKey",contractKey)
            
            contract = new PinkContractPromise(api, phatRegistry, abi, contractId, contractKey as string)
            cert = await signCertificate({ api, pair })
            
            //console.log("certificate",cert)
            console.log("pair",pair.address)
            //console.log("contract:",contract.abi.messages.map((e)=>{return e.method}))
            console.log("Contract loaded successfully");
        } catch (err) {
            console.log("Error in contract loading",err);
            throw err;
        }
    }

    let requesteds: Map<String,Requested> = new Map()
    let receiveds: Map<String,Received> = new Map()
    for (const block of ctx.blocks) {
        for (const item of block.items) {
            if (item.name === 'Contracts.ContractEmitted' && item.event.args.contract === CONTRACT_ADDRESS) {
                
                const event = vrf_consumer.decodeEvent(item.event.args.data)
                console.log("data:",item.event.args.data)
                console.log("event",event)
                if (event.__kind === 'RandomValueRequested') {

                    // last block indexed 4920437
                    if (block.header.height > 4920437 ) {
                        // PHAT_TODO: call phat query here
                        let nbTry = 0;
                        let phatOK = false
                        while (!phatOK && nbTry<20) {
                            if (api && contract) {
                                let result;
                                try {
                                    nbTry++;
                                    console.log("Phat QUERY answerRequest ("+nbTry+")",pair.address)
                                    result = await contract.query.answerRequest(pair.address,{cert});
                                    console.log('result:', result.output.toHuman())
                                    //let resultString = result.output.toHuman() as Object
                                    let res = result?.output?.toHuman() as any
                                if (res?.Ok?.Ok) {
                                    console.log("Phat OK",res.Ok.Ok)
                                    phatOK=true
                                }
                                else {
                                    console.log("Phat ERROR",res.Ok?.Err)
                                    if (String(res.Ok?.Err) === String("NoRequestInQueue")) {
                                        phatOK=true
                                        console.log("EXIT -----------")
                                    }
                                }
                                
                                } catch (error) {
                                    console.log("Error in rollup: \"",error, "\" - Please try again")
                                }
                            }
                        }
                    }
                    
                    
                    requesteds.set(ss58.codec(SS58_PREFIX).encode(event.requestorId)+"-"+String(event.requestorNonce),{
                        id: ss58.codec(SS58_PREFIX).encode(event.requestorId)+"-"+String(event.requestorNonce), // [requestorId-nonce]
                        requestorId: ss58.codec(SS58_PREFIX).encode(event.requestorId),
                        requestorTimestamp: new Date(Number(event.timestamp)),
                        nonce: event.requestorNonce,
                        min: event.min,
                        max: event.max,
                    })
                }
                if (event.__kind === 'RandomValueReceived') {
                    receiveds.set(ss58.codec(SS58_PREFIX).encode(event.requestorId)+"-"+String(event.requestorNonce),{
                        id: ss58.codec(SS58_PREFIX).encode(event.requestorId)+"-"+String(event.requestorNonce), // [requestorId-nonce]
                        requestorId: ss58.codec(SS58_PREFIX).encode(event.requestorId),
                        nonce: event.requestorNonce,
                        randomValue: event.randomValue,
                        receivedTimestamp: new Date(Number(event.timestamp)),
                    })
                    
                }
            }
        }
    }

    // manage creation or update of values
    const values_to_lookup_from_store:Set<String> = new Set()
    const values_to_insert: Map<String,RandomValue> = new Map() 
    let values_to_update: Map<String,RandomValue> = new Map() 

    /** 
     * Je boucle sur les requested, je créé un objet pour tous
     */
    for (let req of requesteds.values()) {
        values_to_insert.set(req.id,new RandomValue({
            id: req.id,
            requestorId: req.requestorId,
            nonce: req.nonce,
            requestorTimestamp: req.requestorTimestamp,
            min: req.min,
            max: req.max,
        }))
    }

    /* Je boucle sur les received */
    for (let rec of receiveds.values()) {
        const to_insert = values_to_insert.get(rec.id)
        // Si je trouve une entrée dans les valeurs à insérer, je met à jour l'entrée
        if (to_insert) {
            // add received fields
            to_insert.randomValue = rec.randomValue
            to_insert.receivedTimestamp = rec.receivedTimestamp
            // Update the value
            values_to_insert.set(to_insert.id,to_insert)
        }
        // Sinon je dois la trouver dans le store
        else {
            values_to_lookup_from_store.add(rec.id)
        }
    }

    values_to_update = await ctx.store.findBy(RandomValue, {id: In([...values_to_lookup_from_store])})
    .then(async (e) => {
        return new Map(e.map(a => {
            const rec = receiveds.get(a.id)
            a.randomValue = rec?.randomValue
            a.receivedTimestamp = rec?.receivedTimestamp
            console.log("Maj valeur depuis store",a)
            return [a.id, a]
        }))
    });

    await ctx.store.insert(Array.from(values_to_insert.values()))
    await ctx.store.save(Array.from(values_to_update.values()))
})
 

