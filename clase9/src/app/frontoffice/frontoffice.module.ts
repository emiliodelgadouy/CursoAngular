import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    SharedModule
  ]
})
export class FrontofficeModule { }
