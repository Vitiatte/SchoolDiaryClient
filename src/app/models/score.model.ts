import {Subject} from './subject.model';
import {ScoreType} from './score-type.model';

export class Score {
  id: string;
  subject: Subject;
  scoreType: ScoreType;
  score: string;
  date: string;
}
