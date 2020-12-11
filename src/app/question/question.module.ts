import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

import { DialogComponent } from '../dialog/dialog.component';
import { QuestionFormComponent } from '../question-form/question-form.component';
import { QuestionPostComponent } from '../question-post/question-post.component';
import { SharedModule } from '../shared/shared.module';
import { QuestionComponent } from './question.component';
import { environment } from 'src/environments/environment';


@NgModule({
    declarations: [
        QuestionComponent,
        QuestionFormComponent,
        QuestionPostComponent,
        DialogComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,//поскольку BrowserModule один должен быть в приложении, соответственно в этом модуле его нельзя import, поэтому добавить нужно CommonModule
        SharedModule,
        RouterModule.forChild([
            { path: "", component: QuestionComponent }
        ]),
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
    ],
    exports: [ RouterModule ]//для того что бы главный модуль понимал что присутствуют другие роуты
})

export class QuestionModule { }