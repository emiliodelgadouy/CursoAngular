import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {Sala} from '../model/sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService extends AbstractService<Sala> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'salas');
  }


}
