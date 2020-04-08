import { Component, OnInit } from '@angular/core';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  isLoggedIn = false;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    if (this.service.checkCredentials()) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.service.logout();
  }
}
