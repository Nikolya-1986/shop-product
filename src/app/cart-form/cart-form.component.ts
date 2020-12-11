import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CartService } from '../services/cart.service';
import { Order } from '../model/order.model';
import { OrderRepository } from '../repository/order.repository';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss']
})
export class CartFormComponent {

  orderSent: boolean = false
  submitted: boolean = false
  showDialog: boolean = false //модальное окно изначально не видно

  constructor(public cartService: CartService, public orderRepository: OrderRepository, public order: Order) { }

  // Метод submitOrder будет вызываться при отправке данных формой, которая представляется объектом NgForm. Если данные, содержащиеся в форме, 
  // проходят проверку, то объект Order будет передан методу getSaveOrder репозитория(orderRepository), а данные в корзине и заказе сбрасываются.
  submitOrder(formCart: NgForm) {
    this.submitted = true;
    if (formCart.valid) {
      this.orderRepository.getSaveOrder(this.order).subscribe(order => {
        this.order.clearOrder();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}