
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

export enum Status {
    created = 'created',
    confirmed = 'confirmed',
    cancelled = 'cancelled',
    delivered = 'delivered',
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    customer: string;

    @Column('text')
    address: string;

    @Column()
    price: number;

    @Column()
    amount: number;

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.created,
    })
    status: Status;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;
}