import { Component, Input, Output, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
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
  imageUrlArray: any = [];
  guestsCountArray: any = [];
  eventTypeArray: any = [];
  venueRelatedDetails: any = [];
  video = "";
  venue: any = {
    name: "",
    address: "",
    contact_number: "",
    location_link: ""
  };
  requestId: number = null;
  venueId :any;
  @ViewChild('f') form: any;

  constructor(
    private translate: TranslateService,
    public router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private inquireRequestsService: InquireRequestsService,
    private venuesService: VenuesService
  ) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe(params => {
       this.venueId = params['id'];
       this.getVenueRelatedDetails(this.venueId);
       this.getVenueDetails(this.venueId);
    });
  }

  getVenueRelatedDetails(id) {
    this.venuesService.getVenueRelatedData(id).then(result => {
      this.venueRelatedDetails = result[0];
      this.guestsCountArray = result[0].data.guests_count;
      this.eventTypeArray = result[0].data.event_types;
    });
  }

  getVenueDetails(id) {
    this.venuesService.getVenueData(id).then(result => {
      this.venue = result[0];
      this.imageUrlArray = result[0].images.split(",");
      this.video = result[0].video
    });
  }

  open(content) {
    this.isSubmitSuccess = false;
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

  submitEnquiry(modal:any) {
    modal.venue_id = '1';
    modal.request_status = 1;
    console.log(modal);
    console.log(this.form)
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
    if(modal.pc_name != undefined && modal.event_type != undefined && modal.event_date != undefined && modal.guests_count != undefined && modal.mobile_number != undefined && modal.email_address != undefined && modal.subject != undefined && modal.message != undefined ) {
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
    else {
      alert("Erforderliche Felder sind Pflichtfelder")
    }

  }
}
