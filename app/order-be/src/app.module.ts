import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    OrderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
