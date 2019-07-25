import { Component, Input, OnInit,OnChanges, NgModule, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InquireRequestsService, VenuesService } from '../../../../shared';

@Component({
  selector: 'app-venuepage',
  templateUrl: './venuepage.component.html',
  styleUrls: ['./venuepage.component.scss']
})
export class VenuepageComponent implements OnInit {
  closeResult:any;
  isSubmitSuccess:boolean = false;
  imageUrlArray: any = [
    'https://achalmhof.de/wp-content/uploads/2017/04/Homepage-Startseite-Hofladen-300x300.jpg',
    'https://achalmhof.de/wp-content/uploads/2016/08/events-300x300.jpg'
  ];
  venuesList: any = [];
  requestId: number = null;

  constructor(
    private translate: TranslateService,
    public router: Router,
    private modalService: NgbModal,
    private inquireRequestsService: InquireRequestsService,
    private venuesService: VenuesService
  ) {

  }

  ngOnInit() {
    this.venuesService.getVenuesList().then(result => {
      this.venuesList = result;
    });
  }

  open(content) {
    this.modalService.open(content, {}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  submitEnquiry(modal) {

    modal.venue_id = '1';
    modal.request_status = 'pc_requested';
    console.log(modal);

    if(modal.created_by) {
      modal = {
        "pc_name": modal.pc_name,
        "event_type": modal.event_type,
        "event_date": modal.event_date,
        "guests_count": modal.guests_count,
        "mobile_number": modal.mobile_number,
        "email_address": modal.email_address,
        "subject": modal.subject,
        "message": modal.message,
        "venue_id": modal.venue_id,
        "request_status": modal.request_status,
        "request_comments": modal.pc_name,
        "created_at" : new Date()
      }
    }
    else {
      modal = {
        "pc_name": modal.pc_name,
        "event_type": modal.event_type,
        "event_date": modal.event_date,
        "guests_count": modal.guests_count,
        "mobile_number": modal.mobile_number,
        "email_address": modal.email_address,
        "subject": modal.subject,
        "message": modal.message,
        "venue_id": modal.venue_id,
        "request_status" : 1,
        "created_at" : new Date()
      }
    }
    this.inquireRequestsService.postInquireRequest(modal)
    .then(
      (response) =>{
        this.isSubmitSuccess = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
