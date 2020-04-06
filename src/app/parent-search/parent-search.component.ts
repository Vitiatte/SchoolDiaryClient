import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../models/student.model';
import {ApiService} from '../api.service';
import {DatePipe} from '@angular/common';
import {NgForm} from '@angular/forms';
import {ParentSearchForm} from './parent-search-form.model';

@Component({
  selector: 'app-parent-search',
  templateUrl: './parent-search.component.html',
  styleUrls: ['./parent-search.component.css']
})
export class ParentSearchComponent implements OnInit {
  students: Student[];
  @Output() searchForm = new EventEmitter<ParentSearchForm>();

  constructor(private api: ApiService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.api.getStudentsForParent(2).subscribe(data => {
      this.students = data;
    });
  }

  onSearch(form: NgForm) {
    const value = form.value;
    const searchForm = new ParentSearchForm();
    searchForm.studentId = value.selectedStudentId;
    console.log(this.datepipe.transform(value.selectedStartDate, 'yyyy/MM/dd'));
    searchForm.startDate = this.datepipe.transform(value.selectedStartDate, 'yyyy/MM/dd');
    searchForm.endDate = this.datepipe.transform(value.selectedEndDate, 'yyyy/MM/dd');
    this.searchForm.emit(searchForm);
  }
}
