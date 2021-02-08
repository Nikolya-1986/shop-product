import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Goods } from '../model/goods.model';

import { HttpService } from '../services/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
})

export class GoodsComponent implements OnInit {
  
  title: string = 'Товары';

  public goodsListArray: Observable<Goods[]>;

  constructor(private httpService: HttpService) { }   
    
  ngOnInit(): void{
    this.goodsListArray = this.httpService.entities$;
    console.log(this.goodsListArray)
    this.httpService.getGoogsList();
  }  
}