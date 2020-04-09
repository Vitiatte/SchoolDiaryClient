import {Component, OnInit} from '@angular/core';
import {LearnDay} from '../models/learn-day.model';
import {ResourceService} from '../service/resource.service';
import {SearchFormData} from '../search-forms/search-form-data.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public schedule: LearnDay[];


  constructor(private api: ResourceService) {
  }

  ngOnInit(): void {
  }

  applySearchResult(searchForm: SearchFormData) {
    this.api.getSchedule(searchForm.studentId, searchForm.startDate, searchForm.endDate).subscribe(data => {
      this.schedule = data;
      this.schedule.sort((a, b) => {
        return a.date > b.date ?
          1 : a.date < b.date ? -1 : 0;
      });
    });
  }

}
