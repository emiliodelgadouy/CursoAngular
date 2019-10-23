import {Injectable} from '@angular/core';
import {VehiculoService} from '../services/vehiculo.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Vehiculo} from '../model/vehiculo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetVehiculoResolver implements Resolve<Vehiculo> {

  constructor(private vehiculoService: VehiculoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Vehiculo> | Promise<Vehiculo> | Vehiculo {
    return this.vehiculoService.get(route.params.id);
  }
}
