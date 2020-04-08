import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';
import {Cookie} from 'ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string = null;

  constructor(
    private service: AuthService
  ) { }

  ngOnInit() {
  }

  async login(form: NgForm) {
    const login = form.value.login;
    const password = form.value.password;

    this.service.authorization(login, password);

    console.log(this.service.checkCredentials());
    console.log(Cookie.get('access_token'));
    if (!this.service.checkCredentials()) {
      this.error = 'Wrong Credentials!';
      form.resetForm();
    }
  }
}
