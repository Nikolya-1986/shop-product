import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";

import { Slide } from '../model/home-carousel.inteface';
import { AnimationType, fadeIn, fadeOut, } from "../home-carousel/home-carousel.animations";

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
  animations: [
    trigger("slideAnimation", [
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),
    ])
  ]
})

export class HomeCarouselComponent implements OnInit {

  @Input() slides: Slide[];
  @Input() animationType = AnimationType.Fade;

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  ngOnInit() {
    this.preloadImages(); 
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }
}