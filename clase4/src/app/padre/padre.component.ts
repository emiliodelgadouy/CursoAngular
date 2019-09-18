import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FamiliaService} from '../familia.service';
import {HijoUnoComponent} from '../hijo-uno/hijo-uno.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit, OnDestroy {

  public apellido;
  private subscription;
  @ViewChild(HijoUnoComponent, {static: false})
  private hijoUno: HijoUnoComponent;

  constructor(private familiaService: FamiliaService) {
    this.subscription = this.familiaService.apellido$.subscribe(value => {
      this.apellido = value;
    });
  }


  ngOnInit() {
  }

  actualizar() {
    this.familiaService.cambiarApellido(this.apellido);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cambiarNombreDeHijoUno() {
    this.hijoUno.cambiarNombre();
  }
}
