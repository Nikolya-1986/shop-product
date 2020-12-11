import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class MyValidators {

    static uniqEmail(control: FormControl): Promise<any> | Observable<any>{//принимает параметр control типа FormControl а возвращает или промис или обзёрбл, указываем дженериктайп <any>
        return new Promise(resolve => {
            setTimeout(() => {
                if (control.value === 'nikolai_sergeevich@mail.ru') {//если введённый email совпадает с сузествующим
                    resolve({uniqEmail: true})//код ошибки данного валидатора
                }else {
                    resolve(null)//иначе метод resolve со значением null
                }
            }, 1000)
        })
    }
}