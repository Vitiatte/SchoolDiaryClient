import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Cookie} from 'ng2-cookies';
import {ServiceConstants} from '../service/service-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  isLoggedIn = false;
  userRole = null;

  constructor(private authService: AuthService,
              private constants: ServiceConstants) { }

  ngOnInit(): void {
    if (this.authService.checkCredentials()) {
      this.isLoggedIn = true;
      this.userRole = Cookie.get(this.constants.cookieUserRole);
    }
  }

  logout() {
    this.authService.logout();
  }
}
