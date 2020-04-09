export class ServiceConstants {

  // Authentication keycloak
  public authClientId = 'school-diary-auth';
  public authClientSecret = '52f5eb0b-4683-42da-859d-0d7fdee42b66';
  public authGrandType = 'password';
  public authTokenUri = 'http://localhost:8080/auth/realms/SchoolDiaryAuth/protocol/openid-connect/token';

  // Resource server
  public resourceBaseUri = 'http://localhost:8081/api/v1.0/';

  // Client server
  public clientBaseUri = 'http://localhost:4200/';
  public clientHomeUri = 'http://localhost:4200/home/';

  // Cookie constants
  public cookieUserId = 'userId';
  public cookieUserRole = 'userRole';
  public cookieAccessToken = 'token';
  public cookieUserLogin = 'login';
}
