import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment, Status } from 'src/entities/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
    constructor(@InjectRepository(Payment) private paymentRepository: Repository<Payment>) {}

    async create({order_id, total}): Promise<Payment> {
        await this.paymentRepository.save({
            order_id,
            total,
            status: Math.random() >= 0.5 ? Status.confirmed : Status.declined
        });

        return await this.paymentRepository.findOne({order_id});
    }
}
