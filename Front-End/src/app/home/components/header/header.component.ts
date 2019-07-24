import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AuthGuard,Globals } from '../../../shared';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    name: string =  '' ;
    role = 0;
    username: string =  '' ;
    isAdmin : boolean = false;
    public pushRightClass: string;
    public userLoggedIn: boolean = false;

    constructor(
      private translate: TranslateService,
      public router: Router,
      private authGuard: AuthGuard,
      private globals: Globals,
    ) {
        this.role = this.globals.getLoginUserRole();
        this.name =  this.globals.getLoginUserFullName() ;
        this.username =  this.globals.getLoginUsername() ;
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        if(this.globals.getLoginStatus()) {
              this.userLoggedIn = true;
          }
          else {
              this.userLoggedIn = false;
          }
         if(this.role == 1) {
             this.isAdmin = true;
         }
         else {
             this.isAdmin = false;
         }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.globals.logout();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
