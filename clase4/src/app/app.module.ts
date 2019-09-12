import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoDosComponent } from './hijo-dos/hijo-dos.component';
import { HijoUnoComponent } from './hijo-uno/hijo-uno.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoDosComponent,
    HijoUnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
