import {Injectable} from '@angular/core';
import {AbstractService} from '../../shared/services/abstract.service';
import {Cliente} from '../../shared/model/cliente';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends AbstractService<Cliente> {

  constructor(httpClient: HttpClient, matSnackBar: MatSnackBar) {
    super(httpClient, 'clientes', matSnackBar);
  }
}
