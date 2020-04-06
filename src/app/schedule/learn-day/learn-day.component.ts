import {Component, Input, OnInit} from '@angular/core';
import {LearnDay} from '../../models/learn-day.model';
import {LearnDayRecord} from '../../models/learn-day-record.model';

@Component({
  selector: 'app-learn-day',
  templateUrl: './learn-day.component.html',
  styleUrls: ['./learn-day.component.css']
})
export class LearnDayComponent implements OnInit {
  @Input() learnDay: LearnDay;

  constructor() { }

  ngOnInit(): void {
  }

  getLessonDescription(lesson: LearnDayRecord): string {
    let description = '';
    description = lesson.startTime + ' - ' + lesson.endTime ;
    description += ' ' + lesson.subject.name + ' | ' + lesson.subject.teacher;
    return description;
  }
}
