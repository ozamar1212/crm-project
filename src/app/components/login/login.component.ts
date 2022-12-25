import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' };
  constructor(private us: UsersService, private router: Router) {}
  LoginGoogle() {
    this.us
      .LoginWithGoggle()
      .then((data) => {
        sessionStorage.setItem('IsLoggedIn', 'true');
        sessionStorage.setItem('email', data.user.email as string);
        this.router.navigateByUrl('/customers');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loginSubmit() {
    console.log(this.user);

    this.us
      .login(this.user)
      .then((data) => {
        sessionStorage.setItem('IsLoggedIn', 'true');
        sessionStorage.setItem('email', data.user.email as string);
        this.router.navigateByUrl('/customers');
      })
      .catch((err) => console.log(err));
  }

  ngOnInit(): void {}
}
