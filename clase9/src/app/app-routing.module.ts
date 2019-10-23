import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'backoffice',
    // loadChildren: './lazy/lazy.module#LazyModule', // use this syntax for non-ivy or Angular 7 and below
    loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule), // new dynamic import method
  },
  {
    path: 'frontoffice',
    // loadChildren: './lazy/lazy.module#LazyModule', // use this syntax for non-ivy or Angular 7 and below
    loadChildren: () => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule), // new dynamic import method
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
