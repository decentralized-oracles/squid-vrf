import { lookupArchive } from "@subsquid/archive-registry"
import * as ss58 from "@subsquid/ss58"
import {toHex} from "@subsquid/util-internal-hex"
import {BatchContext, BatchProcessorItem, SubstrateBatchProcessor} from "@subsquid/substrate-processor"
import {Store, TypeormDatabase} from "@subsquid/typeorm-store"
import {In} from "typeorm"
import * as vrf_consumer from "./abi/vrf_consumer"
import {RandomValue} from "./model"
 
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

processor.run(new TypeormDatabase(), async ctx => {
    let requesteds: Map<String,Requested> = new Map()
    let receiveds: Map<String,Received> = new Map()
    for (const block of ctx.blocks) {
        for (const item of block.items) {
            if (item.name === 'Contracts.ContractEmitted' && item.event.args.contract === CONTRACT_ADDRESS) {
                
                const event = vrf_consumer.decodeEvent(item.event.args.data)
                console.log("data:",item.event.args.data)
                console.log("event",event)
                if (event.__kind === 'RandomValueRequested') {
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
 

