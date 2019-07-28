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
        'http://127.0.0.1:4100/ah-api/addInquireRequest',
        model,
        this.httpOptions
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch();
  }

  getInquireRequestsList(pcName){

    let params = new HttpParams();
    params = params.append('pc_name',pcName);
    return this.httpClient.get(
        'http://127.0.0.1:4100/ah-api/getInquireRequest', {
          params: params
        }
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
  }

  getMeetingList(){

    let params = new HttpParams();
    return this.httpClient.get(
        'http://127.0.0.1:4100/ah-api/getMeetingRequest', {
          params: params
        }
    )
    .toPromise()
    .then(response => {
      console.log("response", response);
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

  postMeetingRequest(model){

    const headers = new Headers({'Content-Type': 'application/json'});
    return this.httpClient.post(
        'http://127.0.0.1:4100/ah-api/addMeetingRequest',
        model,
        this.httpOptions
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch();
  }

  getEventList(){

    let params = new HttpParams();
    return this.httpClient.get(
        'http://127.0.0.1:4100/ah-api/getEventRequest', {
          params: params
        }
    )
    .toPromise()
    .then(response => {
      console.log("response", response);
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

  postEventRequest(model){

    const headers = new Headers({'Content-Type': 'application/json'});
    return this.httpClient.post(
        'http://127.0.0.1:4100/ah-api/addEventRequest',
        model,
        this.httpOptions
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch();
  }

  updateRequest(modelData: {}) {
    const headers = new Headers({'Content-Type': 'application/json'});
    let url = 'http://127.0.0.1:4100/ah-api/updateInquireRequest';
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
