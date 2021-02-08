import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialog', [ //dialog свойство из шаблона, когда отображается trigger, то Angular применит анимацию к этому элементу
      transition('void => *', [//transition как отображать анимацию, * запускать анимацию при любом изменении состояния элемента, void применяется к элементам которых ещё нет
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)//если элемент активен применям анимацию в течение времени указанного
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

export class DialogComponent implements OnInit {
  @Input() closable = true;//настройка окан, скрыть или показать
  //Для создание настраиваемой двухсторонней привязки, для перекючения видимости
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}