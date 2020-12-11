import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GoodsRepository } from '../repository/goods.repository';
import { Goods } from '../model/goods.model';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {

  good: Goods
  header: string = 'Подробнее о товаре'
  statisticalInformation: string
  goodId: number

  constructor(private activatedRoute: ActivatedRoute, private goodsRepository : GoodsRepository) { //activatedRoute приватный объект для взаимодействия с динамическими роутами
    this.goodId = activatedRoute.snapshot.params["id"]//Свойство snapshot хранит состояние маршрута, а состояние маршрута содержит переданные параметры.
    this.statisticalInformation = activatedRoute.snapshot.data[0]['statInf'];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {//activatedRoute - отвечает за текущий объект который загружен, params поле типа обзёрбл на которое можно подписаться
      console.log(params)
      this.good = this.goodsRepository.getGoodsById(+params.id)
    })
  }
}