import {LearnDayRecord} from './learn-day-record.model';

export class LearnDay {
  public id: number;
  public date: Date;
  public learnDayRecords: LearnDayRecord[];
}
