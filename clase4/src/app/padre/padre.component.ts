import {Component, OnInit} from '@angular/core';
import {FamiliaService} from '../familia.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public apellido;

  constructor(private familiaService: FamiliaService) {
    this.familiaService.apellido$.subscribe(apellido => {
      this.apellido = apellido;
    });
  }


  ngOnInit() {
  }

  actualizar() {
    this.familiaService.cambiarApellido(this.apellido);
  }
}
