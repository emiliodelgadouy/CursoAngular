import {Component} from '@angular/core';
import {Sala} from '../../model/sala';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  public sala: Sala;
  public sectores = [{nombre: 1}, {nombre: 2}, {nombre: 3}];

  constructor() {
    this.sala = new Sala();
  }

  onSubmit() {
    if (this.sala.nombre) {
      console.log(this.sala);
    }
  }
}
