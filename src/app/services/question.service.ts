import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Questions } from '../question/question.component';

@Injectable({
  providedIn: 'root'
})

export class QuestionsService {
    
    questionsList: AngularFireList<Questions>;
    
    constructor(private firebase: AngularFireDatabase) { }

    getQuestionsList() {
        this.questionsList = this.firebase.list('questions');
        return this.questionsList;
    }

    addQuestions(title: string) {
        this.questionsList.push({
            title: title
        });
    }

    removeQuestions($key: string) {
        this.questionsList.remove($key)
    }
}