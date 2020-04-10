import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cookie} from 'ng2-cookies';
import {ServiceConstants} from './service-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public error = null;

  constructor(private http: HttpClient, private constants: ServiceConstants) {
  }

  authorization(login: string, pass: string) {
    const params = new URLSearchParams();
    params.append('grant_type', this.constants.authGrandType);
    params.append('client_id', this.constants.authClientId);
    params.append('client_secret', this.constants.authClientSecret);
    params.append('redirect_uri', this.constants.clientBaseUri);
    params.append('username', login);
    params.append('password', pass);

    const header =
      new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        Authorization: 'Basic ' + btoa(this.constants.authClientId + ':' + this.constants.authClientSecret)
      });

    this.http.post(this.constants.authTokenUri,
      params.toString(), {headers: header})
      .subscribe(
        (data: any) => {
          const expireDate = new Date().getTime() + (1000 * data.expires_in);
          this.saveToken(data, expireDate);
          this.updateUserData(login, expireDate);
        },
        error => this.handleError(error));
  }

  updateUserData(login, expireDate) {
    const header = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: 'Bearer ' + Cookie.get(this.constants.cookieAccessToken)
    });

    Cookie.set(this.constants.cookieUserLogin, login);
    this.http.get(
      `${this.constants.resourceBaseUri + 'user/id-role?login=' + login}`,
      {headers: header})
      .subscribe((data: any) => {
        Cookie.set(this.constants.cookieUserId, data.id, expireDate);
        Cookie.set(this.constants.cookieUserRole, data.role, expireDate);
      });

    window.location.href = this.constants.clientHomeUri;
  }

  saveToken(token, expireDate) {
    Cookie.set(this.constants.cookieAccessToken, token.access_token, expireDate);
  }

  checkCredentials() {
    return Cookie.check(this.constants.cookieAccessToken);
  }

  logout() {
    Cookie.deleteAll();
    window.location.href = this.constants.clientHomeUri;
  }

  handleError(error: any) {
    console.log(error);
    if (error.status === 401) {
      this.error = 'Bad Credentials!';
    }
  }

}
