
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

export enum Status {
    confirmed = 'confirmed',
    declined = 'declined'
}

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order_id: number

    @Column()
    total: number

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.confirmed,
    })
    status: Status;

    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}