import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  saludo = ' desde valor por defecto';
  clase = 'azul';

  saludar() {
    this.saludo = ' desde boton';
  }

  colorer() {
    this.clase = this.clase === 'rojo' ? 'azul' : 'rojo';
  }
}
