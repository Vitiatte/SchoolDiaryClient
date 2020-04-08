import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8081/parent/';

  constructor(private http: HttpClient, private service: AuthService) { }

  getParentDetail(id: number): Observable<any> {
    // return this.http.get( `${this.baseUrl + 'detail?id=' + id}`);
    const url = this.baseUrl + 'detail?id=' + id;
    return this.service.getResource(url);
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
