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
      this.venuesList = result;
    });
  }

  gotoVenuepage(venueId) {
    this.router.navigate(['/home/functionhalls/venuepage/'+venueId]);
  }

}
