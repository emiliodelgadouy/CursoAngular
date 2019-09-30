import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SalasComponent} from './salas/salas.component';
import {SalaComponent} from './sala/sala.component';
import {SalaResolverService} from '../resolvers/sala-resolver.service';
import {SalasGuardService} from '../guards/salas-guard.service';
import {SalasDeactivateGuardService} from '../guards/salas-deactivate-guard.service';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'salas', component: SalasComponent},
  {
    path: 'salas/:codigo', component: SalaComponent,
    resolve: {sala: SalaResolverService},
    canActivate: [SalasGuardService],
    canDeactivate: [SalasDeactivateGuardService]
  }
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
