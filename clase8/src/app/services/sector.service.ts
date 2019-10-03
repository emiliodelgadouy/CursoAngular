import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {Sector} from '../model';

@Injectable({
  providedIn: 'root'
})
export class SectorService extends AbstractService<Sector> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'sectores');
  }

}
