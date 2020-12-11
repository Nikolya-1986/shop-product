import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../shared/my.validators';

@Component({
  selector: 'app-wholesale',
  templateUrl: './wholesale.component.html',
  styleUrls: ['./wholesale.component.scss']
})
export class WholesaleComponent implements OnInit {
 
  title: string = "Оптом"
  form: FormGroup//переменная form у которой тип FormGroup, после ее необходимо инициализировать implements OnInit
  constructor() { }

  ngOnInit(): void { //FormGroup класс который позволяет создавать форм группу или нашу текущую форму
    this.form = new FormGroup({
      //Validators объект в котором есть значение для валидации
      //если присутствуют асинхронные валидаторы то их передаём третьим параметров в FormControl, первый параметр начальное значение - пустая строка, второй валидатор или массив валидаторов
      email: new FormControl('', 
        [
          Validators.email, 
          Validators.required,//в объект как ключ передаём название поля а значение должны инициализировать данное поле через класс новый FormControl
      ], [MyValidators.uniqEmail]),//можно взять в массив если их будет несколько
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(6)//Валидаторы с числами необходимо ВЫЗЫВАТЬ и передовать нужное количество чисел
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      price: new FormArray([])//товары для прайс-листа это будет массив, по умолчанию он путой
    });
  }

  submit() {
    if(this.form.valid) {
      const formDate = {...this.form.value}//с помощью оператора spred помещаем все значения value данной формы
      console.log('Form Data:', formDate);

      this.form.reset();//очистка формы
    }
  }

  setCapital() {// Объект в котором будут храниться ключи со значениями Столиц
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    }
    const cityKey = this.form.get('address').get('country').value;//обращение к форме, доступ до контрола но это группа поэтому ещё раз обращаемся к get и обращаемся к тому контролу который нужен у которого необходимо получить значение value
    const city = cityMap [cityKey];
    // patchValue для обновления динамически связанных элементов формы
    this.form.patchValue({//в этот метод необходимо передать новые значения в виде объекта
      address: { city: city }
    })
  }

  addPrice() {
    const controlPrice = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('price')).push //<FormArray> поскольку Angular не понимает что у данной переменной есть метод push, поэтому указываем явно тип данной строчки
    (this.form.get('price') as FormArray).push(controlPrice)// получение контрола и указать тип FormArray
  }
}