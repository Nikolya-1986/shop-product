import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Goods } from '../model/goods.model';
import { HttpService } from '../services/goods.service';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {

  header: string = 'Подробнее о товаре'
  statisticalInformation: string
  goodId: any
  itemID: Goods

  constructor(
    private activatedRoute: ActivatedRoute, //activatedRoute приватный объект для взаимодействия с динамическими роутами
    private httpService: HttpService) { 
    this.goodId = activatedRoute.snapshot.params["id"]//Свойство snapshot хранит состояние маршрута, а состояние маршрута содержит переданные параметры.
    this.statisticalInformation = activatedRoute.snapshot.data[0]['statInf'];
  }

  ngOnInit(): void {
    this.showGoodsID(this.activatedRoute.snapshot.params.id)
  }

  showGoodsID(id: number): void {
    this.httpService.getGoodsById(id)
    .subscribe(
      good => {
        this.itemID = good
        console.log(this.itemID)
      },
      error => {
        console.log(error)
      }
    ) 
  }
}