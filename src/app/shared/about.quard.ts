import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router'

import { Observable } from 'rxjs'
  
export class AboutGuard implements CanActivate {// интерфейс CanActivate, а именно его метод canActivate(). Этот метод получает два параметра - объекты ActivatedRouteSnapshot и RouterStateSnapshot, которые содержат информацию о запросе.
  canActivate(
    route: ActivatedRouteSnapshot,//позволяет получить различную информацию из запроса, в том числе параметры маршрута и строки запроса (id, title, name)
    state: RouterStateSnapshot//это дерево моментальных снимков активированного маршрута. Каждый узел в этом дереве знает о «потребленных» сегментах URL, извлеченных параметрах и разрешенных данных.
  ): Observable<boolean> | boolean {//Результат метода - логическое значение, либо логическое значение, обернутое в объект Observable. Если AboutGuard разрешает переход, то метод canActivate() должен возвращать true. Если доступ запрещен, то метод возвращает false
    return confirm('Вы уверены, что хотите перейти?')
  }
}