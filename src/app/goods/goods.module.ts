import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

import { SharedModule } from '../shared/shared.module';
import { GoodsComponent } from './goods.component';
import { GoodComponent } from '../good/good.component';
import { GoodsFilterComponent } from '../goods-filter/goods-filter.component';
import { GoodsShowComponent } from '../goods-show/goods-show.component';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        GoodsComponent,
        GoodsFilterComponent,
        GoodsShowComponent,
        GoodComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        NgxPaginationModule,//пагинация по странице
        RouterModule.forChild([
            { path: "", component: GoodsComponent },
            { path: ":id", component: GoodComponent, data:[{ statInf: 'Заморская еда с вами навсегда' }] }, // передачи произвольных данных элементам в момент конфигурирования маршрута с помощью свойства data.  data может содержать массив произвольных пар «ключ — значение». 
        ]),
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
    ],
    exports: [ RouterModule ]
})

export class GoodsModule { }