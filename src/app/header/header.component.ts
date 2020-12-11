import { Component } from '@angular/core';

export interface Additionally {
  picture: string,
  title: string,
  text: string,
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logo = "./assets/image/logo.png";

  constructor() { }

  additionallys: Additionally[] = [
    { picture: './assets/image/_phone.png', title: 'Телефон:', text: '+375(44)7323504' },
    { picture: './assets/image/_clock.png', title: 'Работаем:', text: 'Круглосуточно' },
    { picture: './assets/image/_delivery.png', title: 'Доставка:', text: 'Гомель и район' },
    { picture: './assets/image/_discont.png', title: 'Сюрприз:', text: 'Скидки' },
  ]
}