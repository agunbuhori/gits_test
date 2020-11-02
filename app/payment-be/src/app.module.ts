import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PaymentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
