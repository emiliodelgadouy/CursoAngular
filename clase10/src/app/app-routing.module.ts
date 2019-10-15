import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehiculosComponent} from './vehiculo/pages/vehiculos/vehiculos.component';
import {VehiculoComponent} from './vehiculo/pages/vehiculo/vehiculo.component';
import {ClientesComponent} from './cliente/pages/clientes/clientes.component';
import {ClienteComponent} from './cliente/pages/cliente/cliente.component';
import {VehiculoModule} from './vehiculo/vehiculo.module';
import {ClienteModule} from './cliente/cliente.module';
import {GetVehiculoResolver} from './vehiculo/resolvers/get-vehiculo.service';
import {NewVehiculoResolver} from './vehiculo/resolvers/new-vehiculo.service';
import {GetClienteResolver} from './cliente/resolvers/get-cliente.service';
import {NewClienteResolver} from './cliente/resolvers/new-cliente.service';


const routes: Routes = [

  {
    path: 'vehiculos', component: VehiculosComponent
  },
  {
    path: 'vehiculos/nuevo', component: VehiculoComponent, resolve: {
      vehiculo: NewVehiculoResolver
    }
  },
  {
    path: 'vehiculos/:id', component: VehiculoComponent,
    resolve: {
      vehiculo: GetVehiculoResolver
    }
  },

  {path: 'clientes', component: ClientesComponent},
  {
    path: 'clientes/nuevo', component: ClienteComponent,
    resolve: {
      cliente: NewClienteResolver
    }
  },
  {
    path: 'clientes/:id', component: ClienteComponent,
    resolve: {
      cliente: GetClienteResolver
    }
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    VehiculoModule,
    ClienteModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
