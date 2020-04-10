import {Component, OnInit} from '@angular/core';
import {Score} from '../models/score.model';
import {ResourceService} from '../service/resource.service';
import {SearchFormData} from '../search-forms/search-form-data.model';
import {UtilService} from '../service/util.service';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {
  sortedScore = new Map<Date, Score[]>();
  studentId: string;

  constructor(private api: ResourceService,
              private util: UtilService) {
  }

  ngOnInit(): void {
  }

  applySearchFilter(searchFilter: SearchFormData) {
    this.studentId = searchFilter.studentId;
    this.api.getGradebook(this.studentId, searchFilter.startDate, searchFilter.endDate).subscribe(data => {
      data.forEach(a => {
        if (this.sortedScore.has(new Date(a.date))) {
          this.sortedScore.get(new Date(a.date)).push(a);
        } else {
          this.sortedScore.set(new Date(a.date), [a]);
        }
      });
    });
  }
}
