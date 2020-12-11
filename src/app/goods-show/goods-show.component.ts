import { Component, Input } from '@angular/core';

import { Goods } from '../model/goods.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-goods-show',
  templateUrl: './goods-show.component.html',
  styleUrls: ['./goods-show.component.scss']
})
export class GoodsShowComponent {

  @Input() goods: Goods
  @Input() filterParameters: any
  @Input() searchStr: any
  @Input() filterCategory: any
  @Input() view: string
  @Input() pageSize: number
  @Input() page: number
  @Input() count: number
  @Input() currentIndex: number

  color: string = "red"

  constructor(private cartService: CartService) { }

  addGoodsToCart(item: Goods) {//добавление товара в корзину
    this.cartService.getAddGoodsToCart(item);
  }
}