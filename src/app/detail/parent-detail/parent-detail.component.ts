import { Component, OnInit } from '@angular/core';
import {ResourceService} from '../../service/resource.service';
import {Parent} from '../../models/parent.model';
import {ServiceConstants} from '../../service/service-constants';
import {Cookie} from 'ng2-cookies';

@Component({
  selector: 'app-parent-detail',
  templateUrl: './parent-detail.component.html',
  styleUrls: ['./parent-detail.component.css']
})
export class ParentDetailComponent implements OnInit {

  parent: Parent;

  constructor(private api: ResourceService,
              private constant: ServiceConstants) { }

  ngOnInit(): void {
    this.api.getParentDetail(Cookie.get(this.constant.cookieUserId)).subscribe(data => {
      this.parent = data;
    });
  }
}
