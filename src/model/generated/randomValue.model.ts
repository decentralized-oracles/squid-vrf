import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class RandomValue {
    constructor(props?: Partial<RandomValue>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    requestorId!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    nonce!: bigint

    @Column_("timestamp with time zone", {nullable: false})
    requestorTimestamp!: Date

    @Column_("timestamp with time zone", {nullable: true})
    receivedTimestamp!: Date | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    min!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    max!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    randomValue!: bigint | undefined | null
}
