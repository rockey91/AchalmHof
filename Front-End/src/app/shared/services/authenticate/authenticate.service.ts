import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../../global';

@Injectable()
export class AuthenticateService {
  private url = this.globals.apiBaseURL + '/ah-api/authenticate';
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http:Http,
    private globals: Globals,
    private httpClient: HttpClient,
  ){}

  authenticateUser(model) {
    console.log({"service": model})
    var secureUsercreds =
    {
      username: model.username,
      password: model.password
    };

    return this.httpClient.post(
      this.url, // URL
      secureUsercreds, // Object {}
      this.httpOptions // Headers
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(this.handleError);
  }

  resetUserPassword(model: {}) {
    let body = model;
    return this.httpClient.post(
      this.globals.apiBaseURL + '/api/forgotPassword',
      body,
      this.httpOptions
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(this.handleError);

  }

  // On error.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred while fetching the employee details.', error);
    return Promise.reject(error.message || error);
  }

}
