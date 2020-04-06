import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Parent} from '../models/parent.model';

@Component({
  selector: 'app-parent-detail',
  templateUrl: './parent-detail.component.html',
  styleUrls: ['./parent-detail.component.css']
})
export class ParentDetailComponent implements OnInit {

  parent: Parent;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getParentDetail(2).subscribe(data => {
      this.parent = data;
      console.log(parent);
    });
  }
}
