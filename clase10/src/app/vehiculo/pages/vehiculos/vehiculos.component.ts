import {Component, OnInit} from '@angular/core';
import {VehiculoService} from '../../servicios/vehiculo.service';
import {ConfirmationComponent} from '../../../shared/components/confirmation/confirmation.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent {

  private displayedColumns: string[] = ['id', 'tipo', 'matricula', 'operaciones'];
  private vehiculos$;

  constructor(private vehiculoService: VehiculoService, public dialog: MatDialog) {
    this.vehiculos$ = vehiculoService.entidades$;
  }

  remove(element: any) {
    this.dialog.open(ConfirmationComponent, {
      data: {message: '¿Estás seguro de eliminar el vehiculo?', action: this.vehiculoService.delete(element.id)}
    });
  }


}
