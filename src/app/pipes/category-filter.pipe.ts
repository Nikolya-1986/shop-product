import { Pipe, PipeTransform } from '@angular/core';

import { Goods } from '../model/goods.model';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(goods: Goods[], category: string): Goods[] {
    return category == "" ?
      goods : goods.filter(item => item.category == category);
  }
}