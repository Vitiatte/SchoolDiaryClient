import { Component, OnInit } from '@angular/core';
import {ServiceConstants} from '../service/service-constants';
import {Cookie} from 'ng2-cookies';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public userRole: string;

  constructor(public constant: ServiceConstants) { }

  ngOnInit(): void {
    this.userRole = Cookie.get(this.constant.cookieUserRole);
  }

}
