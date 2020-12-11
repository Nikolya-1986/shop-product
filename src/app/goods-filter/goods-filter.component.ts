import { Component, Input, OnInit } from '@angular/core';

import { Goods } from '../model/goods.model';
import { GoodsRepository } from '../repository/goods.repository';
import { HttpService } from '../services/goods.service';

@Component({
  selector: 'app-goods-filter',
  templateUrl: './goods-filter.component.html',
  styleUrls: ['./goods-filter.component.scss']
})
export class GoodsFilterComponent implements OnInit {

  @Input() goods: Goods
  
  categories: string[]; //массив категорий
  allFilter: string[];//массив фильтров
  goodsSortCategory: any[] = [];//массив отсортированных товаров
  searchStr = ''; // поиск строки
  filterCategory = ''; // фильтр по категории
  filterParameters = ''; //фильтр по параметрам(цена, алфавит, умолчанию)
  view: string = 'card'//вид товаров( таблица или карточки)
  page: number = 1;//текущая страница
  count: number = 0;//всего страниц
  pageSize: number = 8;//количество элементов на каждой странице
  pageSizes = [8, 16, 26, 36, 48];//по сколько выводить элементов на странице
  currentIndex: number = -1; //индекс, на сколько листать

  constructor(private httpService: HttpService, private goodsRepository: GoodsRepository) { 
    this.categories = this.goodsRepository.getAllCategories();//для категорий товаров
    this.allFilter = this.goodsRepository.getFilterGoods();// для фильтра по цене, алфавиту
    this.goodsSortCategory = this.goodsRepository.getGoods();
  }

  ngOnInit(): void {
    this.retrieveGoods();
  }

  getRequestParams(page: number, pageSize: number) {
    let params = {};

    if(page) {
      params['page'] = page - 1
    }

    if(pageSize) {
      params['size'] = pageSize;
    }

    return params;
  }

  retrieveGoods(): void {
    const params = this.getRequestParams(this.page, this.pageSize);

    this.httpService.getAllGoods(params)
      .subscribe(
        response => {
          const { goods, goodsItem } = response;
          this.goods = goods;
          this.count = goodsItem;
          console.log(response);
        },
        error => {
          console.log(error)
        }
      )
  }

  handlePageChange(event): void{
    this.page = event;
    this.retrieveGoods();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveGoods(); 
  }
}