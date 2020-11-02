import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Axios from 'axios';
import { Repository } from 'typeorm';
import { Order, Status } from '../entities/order.entity';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) {}

    async getAll(): Promise<Order[]> {
        return await this.orderRepository.find();
    }

    
    async getOne(id: number): Promise<Order> {
        return await this.orderRepository.findOne(id);
    }

    async create(order: Order): Promise<Order> {
        let newOrder = await this.orderRepository.save(order);
        await this.triggerPayment(newOrder.id, (newOrder.price * newOrder.amount));
        return newOrder;
    }

    async updateOrderStatus(id, status): Promise<Order> {
        await this.orderRepository.update({id}, {status});
        return await this.orderRepository.findOne(id);
    }

    async triggerPayment(order_id: number, total: number) {
        try {
            let pay = await Axios.post("http://localhost:3001/payment/pay", {order_id, total});

            this.updateOrderStatus(order_id, pay.data.status === Status.confirmed ? Status.confirmed : Status.cancelled);
            
            if (pay.data.status === 'confirmed') {
                setTimeout(() => {
                    this.updateOrderStatus(order_id, Status.delivered);
                }, 10000);
            }
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}
