import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class  FooterComponent implements OnInit {
    public pushRightClass: string;

    constructor(private translate: TranslateService, public router: Router) {

    }

    ngOnInit() {
    }

    NavigateToPrivacyPolicy(){
      this.router.navigate(['/privacy-policy']);
    }

    NavigateToImpressum(){
      this.router.navigate(['/impressum']);
    }

    NavigateToFaq(){
      this.router.navigate(['/faq']);
    }

}
