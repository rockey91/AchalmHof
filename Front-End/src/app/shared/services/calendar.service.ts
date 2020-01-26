import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Globals } from '../global'; //private globals: Globals

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private httpOptions: any = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
    private globals: Globals
  ){

  }

  postAdminCalendarRequest(model){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.httpClient.post(
        this.globals.apiBaseURL + '/ah-api/addAdminCalendar',
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
        this.globals.apiBaseURL + '/ah-api/getAdminCalendar?admin_user_id=1', {
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
        this.globals.apiBaseURL + '/ah-api/updateAdminCalendar',
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
