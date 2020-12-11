import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

import { CartComponent } from './cart.component';
import { CartFormComponent } from '../cart-form/cart-form.component';
import { environment } from 'src/environments/environment';

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
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
    ],
    exports: [
        RouterModule,
    ]
})

export class CartModule { }