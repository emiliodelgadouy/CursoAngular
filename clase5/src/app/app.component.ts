import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mostrarhijouno = false;
  public hijosuno: any;


  toogle() {
    this.mostrarhijouno = !this.mostrarhijouno;
  }

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(result => {
      this.hijosuno = result;
    });
  }
}
