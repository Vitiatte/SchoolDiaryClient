import { Component, OnInit } from '@angular/core';
import {Score} from '../models/score.model';
import {ApiService} from '../api.service';
import {ParentSearchForm} from '../parent-search/parent-search-form.model';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {
  scores: Score[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  applySearchFilter(searchFilter: ParentSearchForm) {
    this.api.getGradebook(searchFilter.studentId, searchFilter.startDate, searchFilter.endDate).
    subscribe(data => {
      this.scores = data;
    });
  }
}
