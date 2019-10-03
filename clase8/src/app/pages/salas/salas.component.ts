import {Component} from '@angular/core';
import {SalaService} from '../../services/sala.service';
import {Sala} from '../../model';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent {

  public salas$;
  public sala: Sala;

  constructor(private salasService: SalaService) {
    this.sala = new Sala();
    this.salas$ = this.salasService.entidades$;
  }

  delete(id: number) {
    this.salasService.delete(id).subscribe();
  }

  edit(sala: Sala) {
    this.sala = sala;
  }
}
