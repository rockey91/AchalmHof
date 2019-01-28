import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor(private translate: TranslateService, public router: Router) {

  }

  ngOnInit() {

  }

  gotoVenuepage() {
    this.router.navigate(['/home/functionhalls/venuepage']);
  }

}
