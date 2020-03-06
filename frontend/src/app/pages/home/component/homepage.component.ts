import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

}
