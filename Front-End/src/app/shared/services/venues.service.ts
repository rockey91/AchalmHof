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
        if ( response && response["data"] ) {
          return response["data"];
        } else {
          return response;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  getVenueData(id) {
    let params = new HttpParams();
    params = params.append('venueId', id);
    return this.httpClient.get(
      'http://localhost:4100/ah-api/getVenue', {
        params: params
      }
    )
    .toPromise()
    .then(response => {
      if ( response && response["data"] ) {
        return response["data"];
      } else {
        return response;
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  getVenueRelatedData(id) {
    let params = new HttpParams();
    params = params.append('venueId', id);
    return this.httpClient.get(
      'http://localhost:4100/ah-api/getVenueRelatedData', {
        params: params
      }
    )
    .toPromise()
    .then(response => {
      if ( response && response["data"] ) {
        return response["data"];
      } else {
        return response;
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

}
