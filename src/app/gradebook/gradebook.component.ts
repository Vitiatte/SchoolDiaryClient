import { Component, OnInit } from '@angular/core';
import {Score} from '../models/score.model';
import {ResourceService} from '../service/resource.service';
import {SearchFormData} from '../search-forms/search-form-data.model';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {
  scores: Score[];

  constructor(private api: ResourceService) { }

  ngOnInit(): void {
  }

  applySearchFilter(searchFilter: SearchFormData) {
    this.api.getGradebook(searchFilter.studentId, searchFilter.startDate, searchFilter.endDate).
    subscribe(data => {
      this.scores = data;
    });
  }
}
