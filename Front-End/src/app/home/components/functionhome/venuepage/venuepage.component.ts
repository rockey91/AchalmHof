import { Component, Input, OnInit,OnChanges, NgModule, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InquireRequestsService } from '../../../../shared';

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

  requestId: number = null;

  constructor(
    private translate: TranslateService,
    public router: Router,
    private modalService: NgbModal,
    private inquireRequestsService: InquireRequestsService
  ) {

  }

  ngOnInit() {

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

      this.isSubmitSuccess = true;

      modal.venue_id = '1';
      modal.request_status = 'pc_requested';

      this.inquireRequestsService.postInquireRequest(modal)
      .then(
        (response) =>{
            // this.requestId = response[0].data.req_id[0];
            this.requestId = 3;
        },
        (error) => {
            console.log(error);
        }
      );
    }

}
