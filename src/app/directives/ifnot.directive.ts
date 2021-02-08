import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {//Необходимо указать значение директивы 'appIfNot'
  @Input('appIfnot') set ifNot(condition: boolean) {//condition параметр который передаём в структурную директиву
    if (!condition) {//показаь
      this.viewContaner.createEmbeddedView(this.templateRef)//templateRef ссылка на то чем заполнить
    } else {//скрыть
      this.viewContaner.clear()//очищает блок
    }
  }
//Данную дерективу необходимо сделать структурной и для этого инжектируем две сущности, templateRef содержит сожержимое ng-template, viewContenerRef указывает на ng-template
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContaner: ViewContainerRef) { }
}