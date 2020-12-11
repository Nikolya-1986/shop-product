import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

@NgModule({
    declarations: [
        ContactComponent,
    ],
    imports: [
        RouterModule.forChild([
            { path: "", component: ContactComponent }
        ])
    ],
    exports: [ 
        RouterModule,
    ]
})

export class ContactModule { }