import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appStyle]'//Что бы данную директиву использовать как html атрибут необходимо [appStyle]
})

export class StyleDirective {//Получив сслыку на элемент мы можем менять стили
    
    @Input() fontWeight = 'normal'//принимаем директиву
   
    constructor(private el: ElementRef, private ren: Renderer2) {//для того что бы делать инжектирования необходимо использовать конструктор
    }

    @HostListener('mouseenter')onEnter() {//mouseenter событие которое мы хотим слушать на элементе куда добавлена директива
        this.ren.setStyle(this.el.nativeElement, 'color', 'blue')//первый параметр нативный элемент, второе то что хотим изменить и третье на что изменить
        this.ren.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
    }
    @HostListener('mouseleave')onLeave() {
        this.ren.setStyle(this.el.nativeElement, 'color', null)
        this.ren.setStyle(this.el.nativeElement, 'fontWeight', null)
    }
    // @HostBinding('style.color')elColor = null//передаём название того атрибута которого хотим забаиндить на данную переменную
}