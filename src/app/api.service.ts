import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/parent/';

  constructor(private http: HttpClient) { }

  getParentDetail(id: number): Observable<any> {
    return this.http.get( `${this.baseUrl + 'detail?id=' + id}`);
  }

  getSchedule(studentId: string, startDate: string, endDate: string): Observable<any> {
    return this.http.get(`${this.baseUrl + 'schedule?id='
    + studentId + '&startDate=' + startDate + '&endDate=' + endDate}`);
  }

  getGradebook(studentId: string, startDate: string, endDate: string): Observable<any> {
    return this.http.get(`${this.baseUrl + 'scores?id='
    + studentId + '&startDate=' + startDate + '&endDate=' + endDate}`);
  }

  getStudentsForParent(parentId: number): Observable<any> {
    return this.http.get(`${this.baseUrl + 'students?id=' + parentId}`);
  }
}
