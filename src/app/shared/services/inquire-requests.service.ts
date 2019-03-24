import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InquireRequestsService {

  private httpOptions: any = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ){

  }

  postInquireRequest(model){

    const headers = new Headers({'Content-Type': 'application/json'});
    return this.httpClient.post(
        '<url>',
        model,
        this.httpOptions
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(this.handleError);

  }

  getInquireRequestsList(){

    let params = new HttpParams();

    return this.httpClient.get(
        'http://127.0.0.1:3100/basicDetails/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFBSU4wMzk4IiwiZGF0ZXRpbWUiOiJUdWUgTWFyIDE5IDIwMTkgMjI6Mjk6MDcgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpIiwidXNlcnJvbGUiOjEsImlhdCI6MTU1MzAxNDc0OH0.h05FHyxA2AwuIIwoqSxCzMoTI-9ziNujSN2EXi5JxcM', {
          params: params
        }
    )
    .toPromise()
    .then(response => {
      // return response;

      return [
        'https://achalmhof.de/wp-content/uploads/2017/04/Homepage-Startseite-Hofladen-300x300.jpg',
        'https://achalmhof.de/wp-content/uploads/2016/08/events-300x300.jpg'
      ];
    })
    .catch(error => {
      console.log(error);
    });

  }

}
