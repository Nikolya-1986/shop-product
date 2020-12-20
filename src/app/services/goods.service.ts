import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { HttpClient } from '@angular/common/http';
import { Goods } from '../model/goods.model';
  
@Injectable()
export class HttpService {
    
    goodsList: AngularFireList<Goods[]> = null
    item: AngularFireObject<Goods> = null
    private basePath: string = '/goods'
    
    constructor(private http: HttpClient, private firebaseDB: AngularFireDatabase){ }
    
    getGoogsList(): AngularFireList<Goods[]> {
        this.goodsList = this.firebaseDB.list(`${this.basePath}`);
        return this.goodsList;
    }

    getGoodsById(key: number): AngularFireObject<Goods> {
        const itemPath = `${this.basePath}/${key}`;
        this.item = this.firebaseDB.object(itemPath);
        return this.item  
    }

    getAllGoods(params: {}): Observable<any> {
        return this.http.get((`${this.basePath}`), {params});
    }
}
//Методы класса HttpClient после выполнения запроса возвращают объект Observable<any>, который определен в библиотеке RxJS ("Reactive Extensions").
// Смысл использования специального сервиса для работы с http заключается в сокрытии деталей отправки запросов. Компонент же ожидает 
// получить какие-то конкретные данные, например, в виде набора объектов Goods. С помощью метода map библиотеки rxjs можно преобразовать 
// данные из одного формата в другой.