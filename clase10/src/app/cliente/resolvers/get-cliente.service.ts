import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Cliente} from '../../shared/model/cliente';
import {ClienteService} from '../servicios/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class GetClienteResolver implements Resolve<Cliente> {

  constructor(private clienteService: ClienteService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente> | Promise<Cliente> | Cliente {
    return this.clienteService.get(route.params.id);
  }
}
