import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehiculoComponent} from './pages/vehiculo/vehiculo.component';
import {VehiculosComponent} from './pages/vehiculos/vehiculos.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [VehiculoComponent, VehiculosComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [VehiculoComponent, VehiculosComponent]
})
export class VehiculoModule {
}
