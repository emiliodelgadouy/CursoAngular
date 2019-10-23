import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  logas() {
    this.userService.user$.next("FULANO");
  }

  ngOnInit() {
  }

}
