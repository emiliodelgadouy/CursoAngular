import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hijo-uno',
  templateUrl: './hijo-uno.component.html',
  styleUrls: ['./hijo-uno.component.css']
})
export class HijoUnoComponent implements OnInit {

  @Input()
  public nombre = 'default';
  @Input()
  public apellido = 'default';


  constructor() {
  }

  ngOnInit() {
  }

}
