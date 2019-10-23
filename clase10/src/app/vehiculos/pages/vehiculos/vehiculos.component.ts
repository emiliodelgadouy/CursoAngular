import {Component, OnInit} from '@angular/core';
import {VehiculoService} from '../../services/vehiculo.service';
import {ConfirmationComponent} from '../../../../components/confirmation/confirmation.component';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, ResolveStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent {

  private displayedColumns: string[] = ['id', 'tipo', 'matricula', 'operaciones'];
  private vehiculos$;

  constructor(private vehiculoService: VehiculoService, public dialog: MatDialog) {
    console.log('VehiculosComponent creado!');
    this.vehiculos$ = vehiculoService.entidades$;
  }

  remove(element: any) {
    this.dialog.open(ConfirmationComponent, {
      data: {message: '¿Estás seguro de eliminar el vehiculo?', action: this.vehiculoService.delete(element.id)}
    });
  }


}
