import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Cliente} from '../../shared/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class NewClienteResolver implements Resolve<Cliente> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente> | Promise<Cliente> | Cliente {
    return of(new Cliente());
  }
}
