import {Injectable} from '@angular/core';
import {AbstractService} from '../../shared/services/abstract.service';
import {HttpClient} from '@angular/common/http';
import {Vehiculo} from '../model/vehiculo';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService extends AbstractService<Vehiculo> {

  constructor(httpClient: HttpClient, matSnackBar: MatSnackBar) {
    super(httpClient, 'vehiculos', matSnackBar);
  }
}
