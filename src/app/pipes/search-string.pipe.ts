import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchString'
})
export class SearchStringPipe implements PipeTransform {

  transform(goods: any[], search: string = ''): any {//goods - переменная: Goods[] - типа массив, search: string = '' ищем строку а на выходе получаем массив товаров
    if(!search.trim()) {//по умолчанию пустая строка, если это так то ничего не надо искать, trim() очищает пробелы
      return goods;
    }

    return goods.filter(elem => {//фильтр вернёт новый массив, на каждой итерации получем новый объект goodsSort
      return elem.title.toLowerCase().includes(search.toLowerCase())//если в новом объекте есть заголовок совпадает со строкой поиска то выводим новый объект
    })
  }

}