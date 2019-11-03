import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { AuthenticateService, Globals } from '../shared';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
        private translate: TranslateService,
        public router: Router,
        private authService: AuthenticateService,
        private globals: Globals
        ) {
            this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
            this.translate.setDefaultLang('en');
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {}

    onLoggedin(model) {
      this.authService.authenticateUser(model)
          .then(
              (response) => {

                  let body = response.data;
                  let data = response.data.data;
                  let user;
                  if(Array.isArray(data) && data.length){
                    user = data[0];
                  }

                  if ( user !== undefined && user.status ) {
                      this.globals.clearSessionStorage();
                      sessionStorage.setItem('ili', this.globals.getLocalEncryptData({ isLoggedin: 'true' }));
                      sessionStorage.setItem('ur', this.globals.getLocalEncryptData({ userRole: user.role }));
                      sessionStorage.setItem('un', this.globals.getLocalEncryptData({ username: user.username }));
                      sessionStorage.setItem('ufl', this.globals.getLocalEncryptData({ userFullName: user.username }));

                      this.globals.resetUserDetails();
                      this.router.navigate(['/functionhalls']);
                  } else {
                      alert( body.message );
                      this.globals.logout();
                  }
              },
              (error) => {
                console.log(error);
              }
          );
    }
}
