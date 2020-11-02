import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Order, Status } from 'src/entities/order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}
    @Get()
    getAll(): Promise<Order[]> {
        return this.orderService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number): Promise<Order> {
        return this.orderService.getOne(id);
    }

    @Post()
    createOrder(@Body() order): Promise<Order> {
        return this.orderService.create(order);
    }

    @Put('cancel/:id')
    cancelOrder(@Param('id') id: number) {
        return this.orderService.updateOrderStatus(id, Status.cancelled);
    }
}
