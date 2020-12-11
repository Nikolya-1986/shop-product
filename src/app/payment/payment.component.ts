import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  title: string = 'Оплата и доставка'
  isVisible = false
  view: number = 3

  constructor() { }

  payment = ["./assets/image/iconfinder_wallet.png", 
            "./assets/image/iconfinder_mastercard.png",
            "./assets/image/iconfinder_credit-cards.png",
          ]
}