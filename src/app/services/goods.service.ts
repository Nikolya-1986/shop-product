import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Goods } from '../model/goods.model';
  
@Injectable()
export class HttpService {
    
    private basePath: string = 'http://localhost:3000/rest/shop'
    private goodsList: Goods[] = [];
    public entities$: BehaviorSubject<Goods[]> = new BehaviorSubject([])//BehaviorSubject позволяет выдавать начальное значение которое положили в пустой массив

    constructor(private http: HttpClient){ }
    
    public getGoogsList() {
        this.http.get<Goods[]>(`${this.basePath}`)
        .subscribe(goodsList => {
            this.goodsList = goodsList;//обновление goodsList
            this.entities$.next(this.goodsList)//goodsList отправляется в next
        })
    }

    getGoodsById(id: number) {
        return this.http.get(`${this.basePath}/${id}`)
    }
}