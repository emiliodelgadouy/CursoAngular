import {Component, OnInit} from '@angular/core';
import {ClienteService} from '../../servicios/cliente.service';
import {VehiculoService} from '../../../vehiculo/servicios/vehiculo.service';
import {MatDialog} from '@angular/material';
import {ConfirmationComponent} from '../../../shared/components/confirmation/confirmation.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  clientes$: any;
  displayedColumns = ['id', 'nombre', 'razonSocial', 'telefono', 'rut', 'domicilio','vehiculos', 'operaciones'];

  constructor(private clienteService: ClienteService, private dialog: MatDialog) {
    this.clientes$ = this.clienteService.entidades$;
    this.clientes$.subscribe(console.log);
  }


  remove(element: any) {
    this.dialog.open(ConfirmationComponent, {
      data: {
        message: '¿Estás seguro de eliminar el cliente ' + element.id + '?',
        action: this.clienteService.delete(element.id)
      }
    });
  }
}
