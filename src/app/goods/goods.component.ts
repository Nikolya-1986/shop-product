import { Component, OnInit } from '@angular/core';

import { HttpService } from '../services/goods.service';
import { Goods } from '../model/goods.model';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
  providers: [HttpService]
})

export class GoodsComponent implements OnInit {
  
  title: string = 'Товары';
  goodsListArray: any[];
  // goods: Goods[] = [];

  constructor(private httpService: HttpService) { }   
    
  ngOnInit(): void{
    this.getShowGoods();
  }  

  getShowGoods = () => {
    this.httpService.getGoogsList().snapshotChanges()
    .subscribe(item => {
      this.goodsListArray = [];
      item.forEach(element => {
        let el = element.payload.toJSON();
        el["$key"] = element.key;
        this.goodsListArray.push(el)
      })
    })
  }
}
  //загрузка данных в конструкторе компонента не очень желательна. В этом плане метод ngOnInit(), который определен в интерфейсе OnInit и
  // который вызывается при инициализации компонента более предпочтительное место для загрузки данных. В конструкторе просто получаем сервис httpService.
  // в методе ngOnInit() получаем данные из сервиса. Сам метод http.get() возвращает объект Observable<any>. Observable представляет своего рода
  // поток, и для прослушивания событий из этого потока применяется метод subscribe. Этот метод определяет действие над результатом запроса - 
  // полученными с сервера данными. Между схемой класса Goods и данными из файла json есть прямое сопоставление, то получаемые данные можно 
  // определить как объект Goods, и присвоить их переменной data: