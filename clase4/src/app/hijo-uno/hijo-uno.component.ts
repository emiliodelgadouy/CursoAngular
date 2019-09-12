import {Component, Input, OnInit} from '@angular/core';
import {FamiliaService} from '../familia.service';

@Component({
  selector: 'app-hijo-uno',
  templateUrl: './hijo-uno.component.html',
  styleUrls: ['./hijo-uno.component.css']
})
export class HijoUnoComponent implements OnInit {

  public nombre = 'Miguel';
  public apellido = 'default';


  constructor(private familiaService: FamiliaService) {
    this.familiaService.apellido$.subscribe(apellido => {
      this.apellido = apellido;
    });
  }


  ngOnInit() {
  }

}
