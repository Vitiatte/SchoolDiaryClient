import {Component, Input, OnInit} from '@angular/core';
import {LearnDay} from '../../models/learn-day.model';
import {LearnDayRecord} from '../../models/learn-day-record.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-learn-day',
  templateUrl: './learn-day.component.html',
  styleUrls: ['./learn-day.component.css']
})
export class LearnDayComponent implements OnInit {
  @Input() learnDay: LearnDay;
  header: string;

  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.header = this.datepipe.transform(new Date(this.learnDay.date), 'EEEE, MMMM d');
  }

  getLessonDescription(lesson: LearnDayRecord): string {
    let description = '';
    description = this.datepipe.transform(new Date(lesson.startTime), 'HH:mm')
      + ' - ' + this.datepipe.transform(new Date(lesson.endTime), 'HH:mm');
    description += ' ' + lesson.subject.name + ' | ' + lesson.subject.teacher;
    return description;
  }
}
