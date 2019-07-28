import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GlobalService } from '../../../../../../shared';
import { OptionsInput } from '@fullcalendar/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {InquireRequestsService, Globals } from '../../../../../../shared';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

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
    this.getMeetingList();
    this.getEventList();
  }

getMeetingList(){
  this.inquireRequestsService.getMeetingList()
      .then(
        (response:any = []) =>{
          if ( this.globals.getLoginUserRole() == 1 ) {
            this.meetingList = response;
          } else {
            let pcname = this.globals.getLoginUsername();
            this.meetingList = response.filter(obj => {
              return pcname === obj.Name;
            });
          }
        },
        (error) => {
          alert(error);
          console.log(error);
        }
      );
}

getEventList(){
  this.inquireRequestsService.getEventList()
  .then(
    (response:any = []) =>{
      if (this.globals.getLoginUserRole() == 1) {
        this.eventList = response;
      } else {
        let pcname = this.globals.getLoginUsername();
        this.eventList = response.filter(obj => {
          return pcname === obj.name;
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
  if(modal.created_by) {
    modal = {
      "meeting_date": modal.meeting_date,
      "location": modal.location,
      "message": modal.message,
      "name": modal.name,
      "meeting_time": modal.meeting_time,
      "meeting_name": modal.meeting_name,
      "created_at" : new Date()
    }
  }
  else {
    modal = {
      "meeting_date": modal.meeting_date,
      "location": modal.location,
      "message": modal.message,
      "name": modal.name,
      "meeting_time": modal.meeting_time,
      "meeting_name": modal.meeting_name,
      "created_at" : new Date()
    }
  }
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

}
