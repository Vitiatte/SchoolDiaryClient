import {Component, Input, OnInit} from '@angular/core';
import {Score} from '../../models/score.model';
import {Subject} from '../../models/subject.model';
import {ResourceService} from '../../service/resource.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() score: Score;
  @Input() studentId: string;
  header = '';
  scores: Score[];
  popupTitle: string;

  constructor(private resource: ResourceService) { }

  ngOnInit(): void {
  }

  getScoreDescription() {
    return this.score.score + '(' + this.score.scoreType.type + ')' + ' - ' + this.score.subject.teacher;
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
}
