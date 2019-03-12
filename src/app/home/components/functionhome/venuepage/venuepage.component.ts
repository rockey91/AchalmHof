import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-venuepage',
  templateUrl: './venuepage.component.html',
  styleUrls: ['./venuepage.component.scss']
})
export class VenuepageComponent implements OnInit {

  imageUrlArray: any = [
    'https://achalmhof.de/wp-content/uploads/2017/04/Homepage-Startseite-Hofladen-300x300.jpg',
    'https://achalmhof.de/wp-content/uploads/2016/08/events-300x300.jpg'
  ];

  constructor(private translate: TranslateService, public router: Router) {

  }

  ngOnInit() {

  }

}
