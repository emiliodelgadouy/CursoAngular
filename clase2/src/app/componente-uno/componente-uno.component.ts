import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent implements OnInit, OnDestroy {

  @Input()
  public v = 1;


  cambiarVersion() {
    this.v = 15;
  }

  constructor() {
    console.log('Constructor ejecutado');
  }

  ngOnInit() {
    console.log('ngOninit ejecutado');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy ejecutado');
  }

}
