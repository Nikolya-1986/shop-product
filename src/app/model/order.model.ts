import { Injectable } from "@angular/core";

import { CartService } from '../services/cart.service';

@Injectable() 
export class Order {

  public id: number;
  public name: string;
  public address: string;
  public city: string;
  public telephone: number;
  public shipped: boolean = false;
  
  constructor(public cartService: CartService) { }
  
  clearOrder() {
    this.id = this.city = null;
    this.name = this.address = this.city =  null;
    this.shipped = false;
    this.cartService.clearCart();
  }
}