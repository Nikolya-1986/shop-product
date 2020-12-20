import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

import { Order } from '../model/order.model';
import { Goods } from '../model/goods.model';
import { DataSourse } from "src/assets/data.source";

@Injectable({providedIn: 'root'})
export class GoodsRepository {

    private dataSourse: DataSourse
    private goods: Goods[]

    constructor() {
        this.dataSourse = new DataSourse();
        this.goods = new Array<Goods>();
        this.dataSourse.getData().forEach(p => this.goods.push(p));
    }

    getGoods(): Goods[] {//возвращает массив объектов товаров класса Goods
        return this.goods.map(p => new Goods(p.id, p.images, p.title, p.discription, p.price, p.category, p.details, p.superPrice));
    }

    getGoodsById(id: number) {//возвращает одинт товар
        return this.goods.find(p => p.id === id)
    }

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