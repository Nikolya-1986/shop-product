import { Component, ViewEncapsulation } from '@angular/core';

import { CartService } from '../services/cart.service';
import { routerAnimations } from './nav.animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [ routerAnimations ],
  encapsulation: ViewEncapsulation.None,//Локализированные стили становятся глобальными
})

export class NavComponent {

  constructor(public cartService: CartService) { }

  getState(outlet) {//Для определения имени состояния используется метод getState(), извлекающий значение свойства state, заданное для текущего маршрута.
    return outlet.activatedRouteData.state;
  }
}