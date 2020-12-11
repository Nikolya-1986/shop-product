import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { GoodsRepository } from './goods.repository';
import { Order } from '../model/order.model';

@Injectable()

export class OrderRepository {
    private orders: Order[] = [];
    constructor(public goodsRepository: GoodsRepository){ }

    getOrders(): Order[] {
        return this.orders;
    }

    getSaveOrder(order: Order): Observable<Order> {
        return this.goodsRepository.saveOrder(order);
    }
}