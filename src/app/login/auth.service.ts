import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cookie} from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public error = null;

  public clientId = 'school-diary-auth';
  public redirectUri = 'http://localhost:4200/';
  public secret = '52f5eb0b-4683-42da-859d-0d7fdee42b66';

  constructor(private http: HttpClient) { }

  authorization(login: string, pass: string) {
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('client_id', this.clientId);
    params.append('client_secret', this.secret);
    params.append('redirect_uri', this.redirectUri);
    params.append('username', login);
    params.append('password', pass);

    const header =
      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        Authorization: 'Basic ' + btoa(this.clientId + ':' + this.secret)});

    this.http.post('http://localhost:8080/auth/realms/SchoolDiaryAuth/protocol/openid-connect/token',
      params.toString(), { headers: header })
      .subscribe(
        data => this.saveToken(data),
        error => this.handleError(error));
  }

  saveToken(token) {
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set('access_token', token.access_token, expireDate);
    window.location.href = 'http://localhost:4200';
  }

  getResource(resourceUrl): Observable<any> {
    const header = new HttpHeaders({
      'Access-Control-Allow-Origin': this.redirectUri,
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: 'Bearer ' + Cookie.get('access_token')});
    return this.http.get(resourceUrl, { headers: header });
  }

  checkCredentials() {
    return Cookie.check('access_token');
  }

  logout() {
    Cookie.delete('access_token');
    window.location.reload();
  }

  handleError(error: any) {
    console.log(error);
    if (error.status === 401) {
      this.error = 'Bad Credentials!';
    }
  }

}
