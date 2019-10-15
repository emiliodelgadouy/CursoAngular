import {Component, OnDestroy} from '@angular/core';
import {Vehiculo} from '../../../shared/model/vehiculo';
import {VehiculoService} from '../../servicios/vehiculo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnDestroy {

  private vehiculo: Vehiculo;
  private subscription: Subscription;
  private enabled = false;
  private busy = false;

  constructor(private activatedRoute: ActivatedRoute, private vehiculoService: VehiculoService, private router: Router) {
    this.subscription = this.activatedRoute.data.subscribe(data => {
      this.vehiculo = data.vehiculo;
      if (!this.vehiculo.id) {
        this.enabled = true;
      }
    });
  }

  guardar() {
    this.busy = true;
    this.vehiculoService.save(this.vehiculo).subscribe(() => {
      this.busy = false;
      this.router.navigate(['vehiculos']);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
