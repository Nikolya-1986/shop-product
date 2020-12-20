import { animate, query, style, transition, trigger, group } from '@angular/animations';

export const routerAnimations = trigger('routerAnimations', [
    transition('*<=>*', [//любая смена маршрутов
        style({ position: 'relative' }),
        query(':enter, :leave', [//Здесь query() используется для задания исходных стилей выборке элементов.
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ]),
        query(':enter', [style({ left: '-100%' })]),
        group([
          query(':leave', [//После функция group() запускает одновременно анимированную смену представлений. Старое представление сдвигается за пределы окна вправо, а новое, которое было изначально спрятано слева, появляется.
            animate('300ms ease-out',
              style({ left: '100%' })
            ),
          ]),
          query(':enter', [
            animate('300ms ease-out', 
            style({ left: '0%' })),
          ]),
        ]),
    ])
])
// Поскольку в момент смены состояний новое представление вставляется сразу же после предыдущего, элементу, для которого определен триггер, задается относительное позиционирование, а дочерним по отношению к нему элементам - абсолютное. Это нужно для избежания одновременного появления на странице двух представлений.