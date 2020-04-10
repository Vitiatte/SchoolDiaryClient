import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cookie} from 'ng2-cookies';
import {ServiceConstants} from './service-constants';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient, private constants: ServiceConstants) { }

  getParentDetail(id: string): Observable<any> {
    const url = this.constants.resourceBaseUri + 'parent/detail?id=' + id;
    return this.getResource(url);
  }

  getStudentDetail(id: string): Observable<any> {
    const url = this.constants.resourceBaseUri + 'student/detail?id=' + id;
    return this.getResource(url);
  }

  getSchedule(studentId: string, startDate: string, endDate: string): Observable<any> {
    const url = this.constants.resourceBaseUri + 'schedule?id='
      + studentId + '&startDate=' + startDate + '&endDate=' + endDate;
    return this.getResource(url);
  }

  getGradebook(studentId: string, startDate: string, endDate: string): Observable<any> {
    const url = this.constants.resourceBaseUri + 'scores?id='
      + studentId + '&startDate=' + startDate + '&endDate=' + endDate;
    return this.getResource(url);
  }

  getStudentsForParent(parentId: number): Observable<any> {
    const url = this.constants.resourceBaseUri + 'parent/students?id=' + parentId;
    return this.getResource(url);
  }

  getScoresBySubjectAndStudent(studentId: string, subjectId: string) {
    const url = this.constants.resourceBaseUri + 'scoreBySubject?stdId=' +
      studentId + '&subjectId=' + subjectId;
    return this.getResource(url);
  }

  getResource(resourceUrl): Observable<any> {
    const header = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Access-Control-Allow-Origin': this.constants.resourceBaseUri,
      Authorization: 'Bearer ' + Cookie.get(this.constants.cookieAccessToken)
    });
    return this.http.get(resourceUrl, {headers: header});
  }
}
