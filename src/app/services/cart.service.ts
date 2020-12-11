import { Injectable } from '@angular/core';

import { Goods } from '../model/goods.model';

@Injectable({ providedIn: 'root' })

export class CartService {// хранится общее количество выбранных товаров и их общая стоимость, которая будет отображаться в процессе покупки

  constructor() { }

  public goodsCart: GoodsCart[] = [];//для хранения списка (набора) выбранных товаров в корзине
  public goodsCount: number = 0;//общее количество товаров в корзине на текущий момент
  public goodsPrice: number = 0;//Общая сумма всех товаров в корзине на текущий момент
  
  getAddGoodsToCart(goods: Goods, quantity: number = 1) {//возвращает сууму товара (ОДНОГО) и его количество
    let prod = this.goodsCart.find(prod => prod.goods.id == goods.id);
    if (prod != undefined) {
      prod.quantity += quantity;
    } else {
      this.goodsCart.push(new GoodsCart(goods, quantity));
    }
    this.sumGoodsInCart();
  }

  updateQuantity(goods: Goods, quantity: number) {//считает количество товара добавленного в корзину
    let prod = this.goodsCart.find(prod => prod.goods.id == goods.id);
    if (prod != undefined) {
      prod.quantity = Number(quantity);
    }
    this.sumGoodsInCart();
  }

  removeCart(id: number) {// удаление данного элеменнта с корзины
    let index = this.goodsCart.findIndex(prod => prod.goods.id == id);
    this.goodsCart.splice(index, 1);
    this.sumGoodsInCart();
  } 

  prod(id: number) {
    let index = this.goodsCart.findIndex(prod => prod.goods.id == id);
    this.goodsCart.splice(index);
    this.sumGoodsInCart();
  }

  clearCart() {//полная очистка корзины после нажатия кнопки заказать
    this.goodsCart = [];
    this.goodsCount = 0;
    this.goodsPrice = 0;
  }

  private sumGoodsInCart() {//общая  сумма товаров в корзине с учётом их количества
    this.goodsCount = 0;
    this.goodsPrice = 0;
    this.goodsCart.forEach(item => {
      this.goodsCount += item.quantity;
      this.goodsPrice += (item.quantity * item.goods.price);
    })
  }
}

export class GoodsCart {

  constructor(public goods: Goods, public quantity: number) { }

    get lineTotal() {
      return this.quantity * this.goods.price;
    } 
}