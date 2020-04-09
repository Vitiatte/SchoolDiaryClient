import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchFormData} from '../search-form-data.model';
import {ResourceService} from '../../service/resource.service';
import {DatePipe} from '@angular/common';
import {NgForm} from '@angular/forms';
import {Cookie} from 'ng2-cookies';
import {ServiceConstants} from '../../service/service-constants';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {

  @Output() searchForm = new EventEmitter<SearchFormData>();

  constructor(public datepipe: DatePipe, private constant: ServiceConstants) { }

  ngOnInit(): void {
  }

  onSearch(form: NgForm) {
    const value = form.value;
    const searchForm = new SearchFormData();
    searchForm.studentId = Cookie.get(this.constant.cookieUserId);
    searchForm.startDate = this.datepipe.transform(value.selectedStartDate, 'yyyy/MM/dd');
    searchForm.endDate = this.datepipe.transform(value.selectedEndDate, 'yyyy/MM/dd');
    this.searchForm.emit(searchForm);
  }

}
