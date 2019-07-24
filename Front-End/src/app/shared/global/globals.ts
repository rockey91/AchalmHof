import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { Http, Response, ResponseContentType} from "@angular/http";

import { environment } from '../../../environments/environment';

@Injectable()
export class Globals {

  username: string = '';
  userRole: number = 0;
  userFullName: string = '';
  userToken: string = '';

  apiBaseURL: string = '';
  apiServerIP:string = '';

  uiApiEncPwd: string = '';
  uiApiDecPwd: string = '';
  locEncDecPwd: string = '';
  uiApiDecSPwd : string = '';

  regex1: any = new RegExp("^[0-9]{4}-[0-9]{1,2}");
  constructor(
    public router: Router,
    private http: Http
  ) {
    this.apiBaseURL = environment.apiServerURL;
    this.uiApiEncPwd = environment.uiApiEncPwd;
    this.uiApiDecPwd = environment.uiApiDecPwd;
    this.locEncDecPwd = environment.locEncDecPwd;
    this.apiServerIP = environment.apiServerURL;
    this.uiApiDecSPwd = environment.uiApiDecSPwd;
  }

  // Get logged in status.
  getLoginStatus(): boolean {
    var ssLS = sessionStorage.getItem('ili');
    return ( ssLS && ssLS !== null ) ? this.getLocalDecryptData( ssLS ).isLoggedin : false;
  }

  // Get logged in username.
  getLoginUsername( newLogin: boolean = false ) {
    var username = '';
    if ( !newLogin && this.username && this.username !== '' ) {
      username = this.username;
    } else {
      var ssUN = sessionStorage.getItem('un');
      username = ssUN !== null ? this.getLocalDecryptData( ssUN ).username : '';
    }
    this.username = username;
    return username;
  }

  // Get logged in employee name.
  getLoginUserFullName( newLogin: boolean = false ) {
    var userFullName = '';
    if ( !newLogin && this.userFullName && this.userFullName !== '' ) {
      userFullName = this.userFullName;
    } else {
      var ssUFL = sessionStorage.getItem('ufl');
      userFullName = ssUFL !== null ? this.getLocalDecryptData( ssUFL ).userFullName : '';
    }
    this.userFullName = userFullName;
    return userFullName;
  }

  // Get logged in user role.
  getLoginUserRole( newLogin: boolean = false ) {
    var userRole = 0;
    if ( !newLogin && this.userRole && this.userRole !== 0 ) {
      userRole = this.userRole;
    } else {
      var ssUR = sessionStorage.getItem('ur');
      userRole = ssUR !== null ? this.getLocalDecryptData( ssUR ).userRole : 0;
    }
    this.userRole = userRole;
    return userRole;
  }

  // Get logged in user token.
  getLoginUserToken( newLogin: boolean = false ): string {
    var userToken = '';
    if ( !newLogin && this.userToken && this.userToken !== '' ) {
      userToken = this.userToken;
    } else {
      var ssTkn = sessionStorage.getItem('tkn');
      userToken = ssTkn !== null ? this.getLocalDecryptData( ssTkn ).token : '';
    }
    this.userToken = userToken;
    return userToken;
  }


  // Reset all login user details on new login.
  resetUserDetails(): void {
    this.getLoginUsername( true );
    this.getLoginUserFullName( true );
    this.getLoginUserRole( true );
  }

  // Return decryted data
  getLocalDecryptData(data:any): any {
    // Decrypt Message
    return JSON.parse(CryptoJS.AES.decrypt(data.toString(), this.locEncDecPwd).toString(CryptoJS.enc.Utf8));
  }

  // Return encrypted data
  getLocalEncryptData(data:any): any {
    // Encrypt the whole body
    return  CryptoJS.AES.encrypt(JSON.stringify(data), this.locEncDecPwd).toString();
  }

  // Clear session storage.
  clearSessionStorage(): void{
    sessionStorage.removeItem('ili');
    sessionStorage.removeItem('ur');
    sessionStorage.removeItem('un');
    sessionStorage.removeItem('ufl');

    // Remove old session storage if any.
    sessionStorage.removeItem('isLoggedin');
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('empname');
  }
  // Remove seesion storage on logout
  logout( message = undefined ) {
    this.clearSessionStorage();

    this.router.navigate(['/home']);

    if ( message ) {
      console.log(message);
    }
  }
  // Check if the valid text is received.
  isValidText( text: string = undefined ): boolean {
    return (
      text &&
      typeof text === "string" &&
      text.length >= 8
    );
  }
}
