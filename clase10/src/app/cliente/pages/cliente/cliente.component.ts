import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cliente} from '../../../shared/model/cliente';
import {ActivatedRoute, Router} from '@angular/router';
import {ClienteService} from '../../servicios/cliente.service';
import {Subscription} from 'rxjs';
import {VehiculoService} from '../../../vehiculo/servicios/vehiculo.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnDestroy {
  cliente: Cliente;
  enabled = false;
  busy = false;
  subscription: Subscription;
  vehiculos$;


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private clienteService: ClienteService, private vehiculoService: VehiculoService) {
    this.vehiculos$ = this.vehiculoService.entidades$;
    this.subscription = this.activatedRoute.data.subscribe(data => {
      this.cliente = data.cliente;
      if (!this.cliente.id) {
        this.enabled = true;
      }
    });
  }

  guardar() {
    this.busy = true;
    this.clienteService.save(this.cliente).subscribe(() => {
      this.busy = false;
      this.router.navigate(['/clientes']);
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  comparator(a, b) {
    return a.id === b.id;
  }
}
