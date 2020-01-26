import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Globals } from '../global'; //private globals: Globals

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
    private globals: Globals
  ){

  }

  isAdmin(){
    return localStorage.getItem('isAdmin') === 'true';
  }

  getPCName(){
    return localStorage.getItem('pcname');
  }

}
