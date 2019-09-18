import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent implements OnInit {

  @HostListener('click')
  onClick(btn) {
    console.log('click');
  }

  @Input()
  public nombre;

  constructor() {
  }

  ngOnInit() {
  }

}
