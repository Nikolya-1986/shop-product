import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

import { Order } from '../model/order.model';
import { Goods } from "../model/goods.model";

@Injectable({providedIn: 'root'})
export class GoodsRepository {

    public goodID
    constructor() { }

    // getGoodsById(id: number): Goods[] {//возвращает одинт товар
    //     this.goodID = this.httpService.getGoogsList();
    //     console.log(this.goodID)
    //     return this.goodID.find(p => p.id === id)
    // }

    getAllCategories(): string[] {
        return ['рыба', 'овощи', 'фрукты', 'мясо', 'колбасы', 'сыры', 'напитки'];
    }

    getFilterGoods(): string[] {
        return ['Умолчанию', 'Алфавиту(Аа-Яя)', 'Алфавиту(Яя-Аа)', 'Возрастанию цены', 'Убыванию цены']
    }

    saveOrder(order: Order): Observable<Order> {//метод получения заказа. Так как источник данных пока остается фиктивным, метод просто создает на основании заказа строку JSON и выводит ее на консоль
        console.log(JSON.stringify(order));
        return Observable.from([order]);
    }
}