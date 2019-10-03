import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SalasComponent} from './pages/salas/salas.component';
import {SectoresComponent} from './pages/sectores/sectores.component';


const routes: Routes = [
  {
    path: 'salas', component: SalasComponent
  },
  {
    path: 'sectores', component: SectoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
