import { Component, Input, Output, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
