import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WholesaleComponent } from './wholesale.component';

@NgModule({
    declarations: [
        WholesaleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,//для реактивных форм
        RouterModule.forChild([
            { path: "", component: WholesaleComponent }
        ])
    ],
    exports: [ RouterModule ]
})

export class WholesaleModule { }