import {Component, Input, OnInit} from '@angular/core';
import {FamiliaService} from '../familia.service';

@Component({
  selector: 'app-hijo-dos',
  templateUrl: './hijo-dos.component.html',
  styleUrls: ['./hijo-dos.component.css']
})
export class HijoDosComponent implements OnInit {

  public nombre = 'pablo';
  public apellido = 'default';


  constructor(private familiaService: FamiliaService) {
    this.familiaService.apellido$.subscribe(apellido => {
      this.apellido = apellido;
    });
  }

  ngOnInit() {
  }

}
