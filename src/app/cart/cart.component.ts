import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Goods } from '../model/goods.model';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  title = 'Корзина'
  selectedGoods: string

  constructor( public cartService: CartService, private router: Router ) { }

  getSelected(goods: Goods): boolean {
    return goods.title == this.selectedGoods;
  }

  goToGoods() {
    this.router.navigate(['/goods'])//navigate метод который принимает набор пораметром, где нужно указать ссылку для перехода
  }

  colspan() {
    return 4;
  }
}