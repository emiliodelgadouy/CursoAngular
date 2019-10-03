import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SalasComponent} from './pages/salas/salas.component';
import {SectoresComponent} from './pages/sectores/sectores.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SalaComponent} from './components/sala/sala.component';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import { SectorComponent } from './components/sector/sector.component';

@NgModule({
  declarations: [
    AppComponent,
    SalasComponent,
    SectoresComponent,
    SalaComponent,
    SectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
