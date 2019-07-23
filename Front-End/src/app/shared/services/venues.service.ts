import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {

  private httpOptions: any = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ){

  }

  getVenuesList(){

    let params = new HttpParams();

    return this.httpClient.get(
        'http://localhost:4100/ah-api/getAllVenues', {
          params: params
        }
    )
    .toPromise()
    .then(response => {
      console.log("response", response);
       return response.data;

//      return [
//        'https://achalmhof.de/wp-content/uploads/2017/04/Homepage-Startseite-Hofladen-300x300.jpg',
//        'https://achalmhof.de/wp-content/uploads/2016/08/events-300x300.jpg'
//      ];
    })
    .catch(error => {
      console.log(error);
    });

  }

}
