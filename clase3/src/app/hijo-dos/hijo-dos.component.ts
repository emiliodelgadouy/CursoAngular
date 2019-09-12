import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-dos',
  templateUrl: './hijo-dos.component.html',
  styleUrls: ['./hijo-dos.component.css']
})
export class HijoDosComponent implements OnInit {

  @Input()
  public nombre = 'default2';
  @Input()
  public apellido = 'default';

  @Output()
  public apellidoBorrado = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  borrar() {
    this.apellidoBorrado.emit('Gimenez');
  }
}
