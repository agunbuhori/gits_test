import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { Order } from '../entities/order.entity';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  exports: [
    OrderService,
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
