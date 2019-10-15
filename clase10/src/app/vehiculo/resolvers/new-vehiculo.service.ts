import {Injectable} from '@angular/core';
import {VehiculoService} from '../servicios/vehiculo.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Vehiculo} from '../../shared/model/vehiculo';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewVehiculoResolver implements Resolve<Vehiculo> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Vehiculo> | Promise<Vehiculo> | Vehiculo {
    return of(new Vehiculo());
  }
}
