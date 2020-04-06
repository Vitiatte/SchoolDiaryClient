import {Subject} from './subject.model';
import {ScoreType} from './score-type.model';

export class Score {
  id: number;
  subject: Subject;
  scoreType: ScoreType;
  score: number;
  date: Date;
}
