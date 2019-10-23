import {Component} from '@angular/core';
import {Vehiculo} from '../../model/vehiculo';
import {VehiculoService} from '../../services/vehiculo.service';
import {AbstractComponent} from '../../../../components/abstract.component';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent extends AbstractComponent<Vehiculo> {
  protected urlRedirect: 'vehiculos';

  constructor(protected service: VehiculoService, private a2ctivatedRoute: ActivatedRoute) {
    super();
    this.a2ctivatedRoute.data.subscribe(e => {
      // console.log(e)
      this.entity = e.entity;
    });
  }

}
