import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InquireRequestsService, Globals } from '../../../../../../shared';
import { OptionsInput } from '@fullcalendar/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-request',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  replyText: string = "";
  requestsList: any = [];
  selectedRequest: any = {};
  username : string = '';
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  meetingList: any = [];
  eventList: any = [];

  meetingId: number = null;
  eventId: number = null;

  constructor(
    private modal: NgbModal,
    private inquireRequestsService: InquireRequestsService,
    private globals: Globals
  ) {
    this.username = this.globals.getLoginUsername();
  }

  ngOnInit() {
    this.getInquireList();

    // this.inquireRequestsService.getMeetingList()
    // .then(
    //   (response:any = []) =>{
    //     if ( this.globals.getLoginUserRole() == 1 ) {
    //       this.meetingList = response;
    //     } else {
    //       let pcname = this.global.getLoginUsername();
    //       this.meetingList = response.filter(obj => {
    //         return pcname === obj.Name;
    //       });
    //     }
    //   },
    //   (error) => {
    //     alert(error);
    //     console.log(error);
    //   }
    // );
    //
    // this.inquireRequestsService.getEventList()
    // .then(
    //   (response:any = []) =>{
    //     if (this.globals.getLoginUserRole() == 1) {
    //       this.eventList = response;
    //     } else {
    //       let pcname = this.global.getLoginUsername();
    //       this.eventList = response.filter(obj => {
    //         return pcname === obj.name;
    //       });
    //     }
    //   },
    //   (error) => {
    //     alert(error);
    //     console.log(error);
    //   }
    // );
  }

  getInquireList() {
    this.inquireRequestsService.getInquireRequestsList(this.username)
    .then(
      (response:any = []) =>{
        if ( this.globals.getLoginUserRole() == 1 ) {
          this.requestsList = response.data;
        } else {
          let pcname = this.username;
          this.requestsList = response.data.filter(obj => {
            return this.username === obj.name;
          });
        }
      },
      (error) => {
        alert(error);
        console.log(error);
      }
    );

  }
  submitMeeting(modal) {

    this.inquireRequestsService.postMeetingRequest(modal)
    .then(
      (response:any = []) =>{
        this.meetingId = response[0].data.req_id[0];
      },
      (error) => {
        // alert(error);
        console.log(error);
      }
    );
  }

  submitEvent(modal) {

    this.inquireRequestsService.postEventRequest(modal)
    .then(
      (response) =>{
        this.eventId = response[0].data.req_id[0];
      },
      (error) => {
        // alert(error);
        console.log(error);
      }
    );
  }

  showMoreDetails( index ): void {
    this.selectedRequest = this.requestsList[index];
  }

  sendReply(accepted) {
    this.inquireRequestsService.updateRequest({
      id: this.selectedRequest.id,
      request_status: accepted ? 'admin_accepted' : 'admin_rejected'
    })
    .then(
      (response) =>{
        if ( accepted ) {
          alert("Your response with portal credentials is shared with PC to schedule the appointment.");
        } else {
          alert("Your response rejecting the request is shared with PC.");
        }

      },
      (error) => {
        console.log(error);

      }
    )
  }

}