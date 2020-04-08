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

  constructor(public service: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    const login = form.value.login;
    const password = form.value.password;
    this.service.authorization(login, password);
  }
}
