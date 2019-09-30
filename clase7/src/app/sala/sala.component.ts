import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.sass']
})
export class SalaComponent {

  public sala;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(result => {
      this.sala = result.sala;
      console.log(this.sala);
    });
  }
}
