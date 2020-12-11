import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { PaymentComponent } from './payment.component';

@NgModule({
    declarations: [
        PaymentComponent
    ],
    imports: [
        CommonModule,//поскольку BrowserModule один должен быть в приложении, соответственно в этом модуле его нельзя import, поэтому добавить нужно CommonModule
        RouterModule.forChild([
            { path: "", component: PaymentComponent }
        ])
    ],
    exports: [ RouterModule ]//для того что бы главный модуль понимал что присутствуют другие роуты
})

export class PaymentModule { }