import { Component,  ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionsService } from '../services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  showDialog = false;//модальное окно изначально не видно
  formQuestion: FormGroup
  title: string = ''
  @ViewChild('titleInput', { static: false }) inputRef:ElementRef//специальный декоратор в который передаём ссылку и объект static со значением false
  @ContentChild('infoInput', { static: true }) inputRef2:ElementRef

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    console.log(this.inputRef2.nativeElement)
    this.formQuestion = new FormGroup({
      title: new FormControl('', 
        [
          Validators.required,//в объект как ключ передаём название поля а значение должны инициализировать данное поле через класс новый FormControl
          Validators.minLength(10)//Валидаторы с числами необходимо ВЫЗЫВАТЬ и передовать нужное количество чисел
      ]),
    });
  }

  addQuestion(titleInput) {
    if(this.title.trim()) {
      this.questionsService.addQuestions(titleInput.value);
      titleInput.value = null;
    }
  }

  submit() {
    if(this.formQuestion.valid) {
      const formDate = {...this.formQuestion.value}//с помощью оператора spred помещаем все значения value данной формы
      console.log('Form Data:', formDate);
      this.formQuestion.reset();//очистка формы
    }
  }
  
  focusTitle() {
    console.log(this.inputRef)
    this.inputRef.nativeElement.focus()//nativeElement Дом элемент у которого можно вызвать необходимые методы
  }
}