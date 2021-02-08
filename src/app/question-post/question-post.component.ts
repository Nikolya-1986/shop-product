import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Questions } from '../question/question.component';
import { QuestionsService } from '../services/question.service';

@Component({
  selector: 'app-question-post',
  templateUrl: './question-post.component.html',
  styleUrls: ['./question-post.component.scss']
})
export class QuestionPostComponent implements OnDestroy {

  @Input() searchStr: any
  @Input() questions: Questions[];
  @Output() delete = new EventEmitter<string>();

  fontSize: string = '1.2rem'

  constructor(private questionsService: QuestionsService) { }

  onDelete(question: any) {
    this.delete.emit(question.$key);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}