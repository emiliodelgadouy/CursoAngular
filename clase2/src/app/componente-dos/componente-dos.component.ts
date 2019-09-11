import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.css']
})
export class ComponenteDosComponent implements OnInit {


  nombre = 'Fulanito';

  constructor() {
  }

  ngOnInit() {
  }

  resetear() {
    this.nombre = "1";
    this.nombre = "2";
    this.nombre = "3";
    this.nombre = "4";
    this.nombre = '5';

  }
}
