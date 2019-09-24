import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent{
  public sectores = [{nombre: 1}, {nombre: 2}, {nombre: 3}];


  public form = new FormGroup({
    nombre: new FormControl('Sala1', Validators.compose([Validators.required, Validators.minLength(3), this.validarSala])),
    capacidad: new FormControl('5', Validators.compose([Validators.required, Validators.min(1), Validators.max(1000)])),
    sectores: new FormControl('A', Validators.compose([Validators.required]))
  });

  constructor() {

  }

  onSubmit() {
    console.log(this.form.value);
  }


  validarSala(c: FormControl) {
    if (c.value === 'Sala1') {
      return {salaError: {valid: false}};
    }
  }
}
