import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Questions } from '../question/question.component';
import { QuestionsService } from '../services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent {

  showDialog = false;//модальное окно изначально не видно
  formQuestion: FormGroup
  title: string = ''
  //Новый класс new EventEmitter() в котором по умолчанию ничего нет <Question> - дненеректив, onAdd любое название так как это ссылка
  // @Output() onAdd: EventEmitter<Questions> = new EventEmitter<Questions>()//передавать будем Question которые создавали const question: Question = стр.22
  @ViewChild('titleInput', { static: false }) inputRef!:ElementRef//специальный декоратор в который передаём ссылку и объект static со значением false

  constructor(private questionsService: QuestionsService) {
    this.formQuestion = new FormGroup({
      title: new FormControl('', 
        [
          Validators.required,//в объект как ключ передаём название поля а значение должны инициализировать данное поле через класс новый FormControl
          Validators.minLength(10)//Валидаторы с числами необходимо ВЫЗЫВАТЬ и передовать нужное количество чисел
      ]),
    });
   }

  ngOnInit(): void {
  }

  addQuestion(titleInput) {
    if(this.title.trim()) {
      this.questionsService.addQuestions(titleInput.value);
      titleInput.value = null;
    }
  }
  // addQuestion() {
  //   if(this.text.trim() && this.title.trim()) {
  //     const question: Questions = {
  //       title: this.title,
  //       text: this.text,
  //       answer: 'Данный вопрос находится на обработке',
  //     }
  //     this.onAdd.emit(question)//метод получаемый в следствии наследования, передать нужно тот объектк который будем имитить
  //     this.title=this.text = '';//Вызвав метод emit Angular отправит в родительский компонент соответствующие данные
  //   } 
  // }

  submit() {
    if(this.formQuestion.valid) {
      const formDate = {...this.formQuestion.value}//с помощью оператора spred помещаем все значения value данной формы
      console.log('Form Data:', formDate);

      this.formQuestion.reset();//очистка формы
    }
  }
  
  focusTitle() {
    this.inputRef.nativeElement.focus()//nativeElement Дом элемент у которого можно вызвать необходимые методы
  }
}