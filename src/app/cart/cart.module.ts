import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CartComponent } from './cart.component';
import { CartFormComponent } from '../cart-form/cart-form.component';

@NgModule({
    declarations: [
        CartComponent,
        CartFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: "", component: CartComponent }
        ]),
    ],
    exports: [
        RouterModule,
    ]
})

export class CartModule { }