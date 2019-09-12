import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public apellido = 'Perez';
  public nombre1 = ''

  constructor() {
  }

  ngOnInit() {
  }

  doApellidoBorrado($event) {
    this.apellido = $event;
  }

}
