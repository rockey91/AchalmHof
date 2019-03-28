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
        'http://127.0.0.1:3100/ahapi/addRequest',
        model,
        this.httpOptions
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch();

  }

  getInquireRequestsList(){

    let params = new HttpParams();

    return this.httpClient.get(
        'http://127.0.0.1:3100/ahapi/getRequests', {
          params: params
        }
    )
    .toPromise()
    .then(response => {
      return response;

      // return [
      //   'https://achalmhof.de/wp-content/uploads/2017/04/Homepage-Startseite-Hofladen-300x300.jpg',
      //   'https://achalmhof.de/wp-content/uploads/2016/08/events-300x300.jpg'
      // ];
    })
    .catch(error => {
      console.log(error);
    });

  }

  updateRequest(modelData: {}) {
    const headers = new Headers({'Content-Type': 'application/json'});
    let url = 'http://127.0.0.1:3100/ahapi/updateRequest';
    return this.httpClient.put(
      url,
      modelData,
      this.httpOptions
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
  }

}
