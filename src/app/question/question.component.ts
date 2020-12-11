import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/question.service';

export interface Questions {
  title: string,
  answer?: string,
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [QuestionsService]
})
export class QuestionComponent implements OnInit {

  title: string = 'Ваши вопросы';
  questions: any[]

  constructor(private questionsService: QuestionsService) { }
  
  ngOnInit() {
    this.questionsService.getQuestionsList().snapshotChanges()
    .subscribe(item => {
      this.questions = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.questions.push(x);
      })
    });
  }

  updateQuestion(question: Questions) {
    this.questions.unshift(question)
  }
}