import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamiliaService {

  public apellido$ = new BehaviorSubject('sarasa');

  public cambiarApellido(apellido) {
    this.apellido$.next(apellido);
  }
}


