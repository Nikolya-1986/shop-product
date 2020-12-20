import { Component, OnInit } from '@angular/core';

import { HttpService } from '../services/goods.service';
import { Goods } from '../model/goods.model';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
  providers: [HttpService]
})

export class GoodsComponent implements OnInit {
  
  title: string = 'Товары';
  goodsListArray: any[];

  constructor(private httpService: HttpService) { }   
    
  ngOnInit(): void{
    this.getShowGoods();
  }  

  getShowGoods = () => {
    this.httpService.getGoogsList().snapshotChanges()
    .subscribe(item => {
      this.goodsListArray = [];
      item.forEach(element => {
        let el = element.payload.toJSON();
        el["$key"] = element.key;
        this.goodsListArray.push(el)
      })
    })
  }
}