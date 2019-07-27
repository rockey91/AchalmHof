import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InquireRequestsService, Globals } from '../../../../../../shared';
import { OptionsInput } from '@fullcalendar/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {GlobalService } from '../../../../../../shared';

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
    private globalService: GlobalService,
    private inquireRequestsService: InquireRequestsService,
    private globals: Globals
  ) {
    this.username = this.globals.getLoginUsername();
  }

  ngOnInit() {
    this.getInquireList();
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

  sendReply(data, acceptance) {
    this.inquireRequestsService.updateRequest({
      id: data.id,
      request_status: acceptance ? 'admin_accepted' : 'admin_rejected',
      last_updated_by : this.username
    })
    .then(
      (response) => {
        if ( acceptance ) {
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
