import { Component, ViewEncapsulation } from '@angular/core';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,//Локализированные стили становятся глобальными
})

export class NavComponent {

  constructor(public cartService: CartService) { }

}