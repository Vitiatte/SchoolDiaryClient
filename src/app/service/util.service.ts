import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  dateComparator(date1: Date, date2: Date): number {
    return date1.getTime() > date2.getTime() ?
      1 : date1.getTime() < date2.getTime() ? -1 : 0;
  }
}
