import { Component, ViewChild } from "@angular/core";
import { AnimationType } from '../home-carousel/home-carousel.animations';

import { HomeCarouselComponent } from '../home-carousel/home-carousel.component';
import { Slide } from '../model/home-carousel.inteface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  title = 'Главная'
  @ViewChild(HomeCarouselComponent) homeCarouselComponent: HomeCarouselComponent
  animationType = AnimationType.Fade;

  slides: Slide[] = [
    {
      src:
        "../assets/image/carousel_img-1.jpg"
    },
    {
      src:
        "../assets/image/carousel_img-2.jpg"
    },
    {
      src:
        "../assets/image/carousel_img-3.jpg"
    },
  ];

  constructor() {}

  setAnimationType(type) {
    this.animationType = type.value;
    setTimeout(() => {
      this.homeCarouselComponent.onNextClick();
    });
  }
}