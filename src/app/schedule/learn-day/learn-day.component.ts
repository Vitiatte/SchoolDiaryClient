import {Component, Input, OnInit} from '@angular/core';
import {LearnDay} from '../../models/learn-day.model';
import {LearnDayRecord} from '../../models/learn-day-record.model';
import {DatePipe} from '@angular/common';
import {ResourceService} from '../../service/resource.service';
import {Score} from '../../models/score.model';
import {Subject} from '../../models/subject.model';

@Component({
  selector: 'app-learn-day',
  templateUrl: './learn-day.component.html',
  styleUrls: ['./learn-day.component.css']
})
export class LearnDayComponent implements OnInit {
  @Input() learnDay: LearnDay;
  @Input() studentId: string;
  header: string;
  popupTitle: string;
  scores: Score[];

  constructor(public datepipe: DatePipe,
              private resource: ResourceService) { }

  ngOnInit(): void {
    this.header = this.datepipe.transform(new Date(this.learnDay.date), 'EEEE, MMMM d');
  }

  getLessonDescription(lesson: LearnDayRecord): string {
    let description = '';
    description = this.datepipe.transform(new Date(lesson.startTime), 'HH:mm')
      + ' - ' + this.datepipe.transform(new Date(lesson.endTime), 'HH:mm');
    description += ' ' + lesson.subject.name;
    return description;
  }

  openPopup(subject: Subject) {
    this.popupTitle = subject.name;
    this.resource.getScoresBySubjectAndStudent(this.studentId, subject.id)
      .subscribe(data => {
        this.scores = data;
        this.scores.sort((a, b) => {
          return a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
        });
      });
  }

  getScoreDescription(score: Score) {
    return this.datepipe.transform(new Date(score.date), 'MMMM d')
      + ' - ' + score.score + ' (' + score.scoreType.type + ')';
  }
}
