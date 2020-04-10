import {Component, OnInit} from '@angular/core';
import {LearnDay} from '../models/learn-day.model';
import {ResourceService} from '../service/resource.service';
import {SearchFormData} from '../search-forms/search-form-data.model';
import {UtilService} from '../service/util.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public schedule: LearnDay[];
  public studentId: string;


  constructor(private api: ResourceService,
              private util: UtilService) {
  }

  ngOnInit(): void {
  }

  applySearchResult(searchForm: SearchFormData) {
    this.studentId = searchForm.studentId;
    this.api.getSchedule(this.studentId, searchForm.startDate, searchForm.endDate).subscribe(data => {
      this.schedule = data;
      this.schedule.sort((a, b) => this.util.dateComparator(new Date(a.date), new Date(b.date)));
    });
  }
}
