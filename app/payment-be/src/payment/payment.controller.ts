import { Body, Controller, Post } from '@nestjs/common';
import { Payment } from 'src/entities/payment.entity';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) {}

    @Post('pay')
    pay(@Body() data) {
        return this.paymentService.create(data);
    }
}
