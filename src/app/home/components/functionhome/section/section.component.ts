import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { VenuesService } from '../../../../shared';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  venuesList: any = [];

  constructor(
    private translate: TranslateService,
    public router: Router,
    private venuesService: VenuesService
  ) {

  }

  ngOnInit() {

    this.venuesService.getVenuesList().then(result => {
      console.log(result);
      // this.venuesList = result;

      this.venuesList = [
        'https://achalmhof.de/wp-content/uploads/2017/04/Homepage-Startseite-Hofladen-300x300.jpg',
        'https://achalmhof.de/wp-content/uploads/2016/08/events-300x300.jpg'
      ]
    });

  }

  gotoVenuepage() {
    this.router.navigate(['/home/functionhalls/venuepage']);
  }

}
