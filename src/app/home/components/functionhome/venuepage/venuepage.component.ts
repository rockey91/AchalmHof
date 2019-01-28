import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-venuepage',
  templateUrl: './venuepage.component.html',
  styleUrls: ['./venuepage.component.scss']
})
export class VenuepageComponent implements OnInit {

  constructor(private translate: TranslateService, public router: Router) {

  }

  ngOnInit() {

  }

}
