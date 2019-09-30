import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {SalaComponent} from '../app/sala/sala.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalasDeactivateGuardService implements CanDeactivate<SalaComponent> {

  canDeactivate(component: SalaComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    alert('Tienes cambios sin guardar');
    return false;
  }
}
