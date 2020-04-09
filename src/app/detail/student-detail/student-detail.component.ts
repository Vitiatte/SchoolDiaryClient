import { Component, OnInit } from '@angular/core';
import {Student} from '../../models/student.model';
import {ResourceService} from '../../service/resource.service';
import {ServiceConstants} from '../../service/service-constants';
import {Cookie} from 'ng2-cookies';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  public student: Student;

  constructor(public resource: ResourceService,
              public constant: ServiceConstants) { }

  ngOnInit(): void {
    this.resource.getStudentDetail(Cookie.get(this.constant.cookieUserId))
      .subscribe(data => this.student = data);
  }

}
