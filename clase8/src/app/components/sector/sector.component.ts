import {Component, Input, OnInit} from '@angular/core';
import {Sector} from '../../model';
import {SectorService} from '../../services/sector.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent {


  private _sector: Sector;


  get sector(): Sector {
    return this._sector;
  }

  @Input()
  set sector(value: Sector) {
    this._sector = Object.assign({}, value);
  }

  constructor(private sectorServce: SectorService) {
  }

  enviar() {
    if (this._sector.id) { // estamos editando
      this.sectorServce.update(this._sector, this._sector.id).subscribe(() => {
        this.sector = new Sector();
      });
    } else { // vamos a crear
      this.sectorServce.create(this._sector).subscribe(() => {
        this.sector = new Sector();
      });
    }

  }
}
