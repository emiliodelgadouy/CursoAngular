import {Component, OnInit} from '@angular/core';
import {SectorService} from '../../services/sector.service';
import {Sector} from '../../model';

@Component({
  selector: 'app-sectores',
  templateUrl: './sectores.component.html',
  styleUrls: ['./sectores.component.css']
})
export class SectoresComponent {

  public sectores$;
  public sector;

  constructor(private sectorService: SectorService) {
    this.sectores$ = this.sectorService.entidades$;
  }


  remove(id: number) {
    this.sectorService.delete(id).subscribe();
  }

  update(sector: Sector) {
    this.sector = sector;
  }
}
