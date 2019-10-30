import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private httpOptions: any = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ){

  }

  postAdminCalendarRequest(model){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.httpClient.post(
        'http://127.0.0.1:4100/ah-api/addAdminCalendar',
        model,
        this.httpOptions
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch();
  }

  getAdminCalendarList(){
    let params = new HttpParams();
    return this.httpClient.get(
        'http://127.0.0.1:4100/ah-api/getAdminCalendar?admin_user_id=1', {
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

  updateAdminCalendarRequest(model){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.httpClient.put(
        'http://127.0.0.1:4100/ah-api/updateAdminCalendar',
        model,
        this.httpOptions
    )
    .toPromise()
    .then(response => {
      return response;
    })
    .catch();
  }

}
