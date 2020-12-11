import { Pipe, PipeTransform } from '@angular/core';

import { Goods } from '../model/goods.model';

@Pipe({
  name: 'sortGoods'
})
export class SortGoodsPipe implements PipeTransform {

  transform(goods: Goods[], value: Object): Goods[] {
    
    goods.sort((a: any, b: any) => {

      if(value == 'Умолчанию') {
        if(a.id < b.id) {
          return -1;
        }else if (a.id > b.id) {
          return 1;
        }else {
          return 0;
        }
      }

      if(value == 'Алфавиту(Аа-Яя)') {
        if(a.title < b.title) {
          return -1;
        }else if (a.title > b.title) {
          return 1;
        }else {
          return 0;
        }
      }

      if(value == 'Алфавиту(Яя-Аа)') {
        if(a.title > b.title) {
          return -1;
        }else if (a.title > b.title) {
          return 1;
        }else {
          return 0;
        }
      }

      if(value == 'Возрастанию цены') {
        if(a.price < b.price) {
          return -1;
        }else if (a.price > b.price) {
          return 1;
        }else {
          return 0;
        }
      }

      if(value == 'Убыванию цены') {
        if(a.price > b.price) {
          return -1;
        }else if (a.price > b.price) {
          return 1;
        }else {
          return 0;
        }
      }
    });
    return goods;
  }
}