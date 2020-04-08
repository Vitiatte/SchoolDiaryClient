import { Component, OnInit } from '@angular/core';
import {Cookie} from 'ng2-cookies';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: AuthService) { }

  ngOnInit(): void {
    console.log(Cookie.check('access_token'));
  }

}
