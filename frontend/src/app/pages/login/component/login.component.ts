import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'user';

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.username);
    this.router.navigateByUrl('home');
  }
}
