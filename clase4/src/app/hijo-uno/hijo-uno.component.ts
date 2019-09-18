import {Component} from '@angular/core';
import {FamiliaService} from '../familia.service';

@Component({
  selector: 'app-hijo-uno',
  templateUrl: './hijo-uno.component.html',
  styleUrls: ['./hijo-uno.component.css']
})
export class HijoUnoComponent {

  public nombre = 'Miguel';

  constructor(private familiaService: FamiliaService) {
  }

  public cambiarNombre() {
    this.nombre = 'Manolo';
  }

}
