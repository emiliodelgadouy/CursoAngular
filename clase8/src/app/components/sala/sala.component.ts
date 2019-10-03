import {Component, Input} from '@angular/core';
import {Sala, Sector} from '../../model';
import {SalaService} from '../../services';
import {SectorService} from '../../services/sector.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent {

  private _sala: Sala;
  private sectores$;

  @Input()
  get sala(): Sala {
    return this._sala;
  }

  set sala(value: Sala) {
    this._sala = Object.assign({}, value);
  }

  constructor(private salaService: SalaService, private sectorService: SectorService) {
    this.sectores$ = this.sectorService.entidades$;
  }

  onSubmit() {
    if (this._sala.id) {
      console.log('editando');
      this.salaService.update(this._sala, this._sala.id).subscribe(() => {
        this._sala = new Sala();
      });
    } else {
      console.log('creando');
      this.salaService.create(this._sala).subscribe(() => {
        this._sala = new Sala();
      });
    }
  }

  comparador(s1: Sector, s2: Sector) {
    return s1 && s2 && s1.id === s2.id;
  }
}
