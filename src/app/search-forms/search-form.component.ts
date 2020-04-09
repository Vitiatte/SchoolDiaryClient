import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServiceConstants} from '../service/service-constants';
import {Cookie} from 'ng2-cookies';
import {SearchFormData} from './search-form-data.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  public userRole;
  @Output() public searchData = new EventEmitter<SearchFormData>();

  constructor(private constant: ServiceConstants) { }

  ngOnInit(): void {
    this.userRole = Cookie.get(this.constant.cookieUserRole);
  }

  handleChildForm(searForm: SearchFormData) {
    this.searchData.emit(searForm);
  }
}
