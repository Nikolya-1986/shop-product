import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  // latitude = 151.678418;
  // longitude = 7.809007;
  // locationChosen = false;
  constructor(private router: Router) { }

  goToPosts() {//программная навигация
    this.router.navigate(['/question'])//navigate метод который принимает набор пораметром, где нужно указать ссылку для перехода
  }

  // onChoseLocation(event) {
  //   this.latitude = event.coords.lat;
  //   this.longitude = event.coords.lng;
  //   this.locationChosen = true;
  // }
}