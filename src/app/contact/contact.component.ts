import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private router: Router) { }

  goToPosts() {//программная навигация
    this.router.navigate(['/question'])//navigate метод который принимает набор пораметром, где нужно указать ссылку для перехода
  }
}