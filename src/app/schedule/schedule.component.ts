import { Component, OnInit } from '@angular/core';
import {LearnDay} from '../models/learn-day.model';
import {ApiService} from '../api.service';
import {LearnDayRecord} from '../models/learn-day-record.model';
import {ParentSearchForm} from '../parent-search/parent-search-form.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public schedule: LearnDay[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  applySearchResult(searchForm: ParentSearchForm) {
    this.api.getSchedule(searchForm.studentId, searchForm.startDate, searchForm.endDate).
      subscribe(data => {
        this.schedule = data;
    });
  }
}
