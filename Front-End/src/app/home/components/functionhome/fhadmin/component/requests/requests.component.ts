import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptionsInput } from '@fullcalendar/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  InquireRequestsService,
  Globals,
  GlobalService,
  CalendarService
} from '../../../../../../shared';

import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick

@Component({
  selector: 'app-request',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template
  @ViewChild('closeGoToDate') closeGoToDate: ElementRef<HTMLElement>;

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = false;
  calendarEvents: EventInput[] = [
    {
      id:    'available_hours',
      start: '2015-1-13T8:00:00',
      end:   '2015-1-13T19:00:00',
      rendering: 'background'
    },
    {
      id:    'work',
      start: '2015-1-13T10:00:00',
      end:   '2015-1-13T16:00:00',
      constraint: 'available_hours'
    }
  ];
  calendarBusinessHours: any = [
    {
      daysOfWeek: [ 0 ], // Monday - Thursday
      startTime: '00:00', // a start time (10am in this example)
      endTime: '00:00', // an end time (6pm in this example)
    },
    {
      // days of week. an array of zero-based day of week integers (0=Sunday)
      daysOfWeek: [ 1, 2, 3, 4 ], // Monday - Thursday
      startTime: '09:00', // a start time (10am in this example)
      endTime: '12:00', // an end time (6pm in this example)
    },
    {
      // days of week. an array of zero-based day of week integers (0=Sunday)
      daysOfWeek: [ 1, 2, 3, 4 ], // Monday - Thursday
      startTime: '14:00', // a start time (10am in this example)
      endTime: '18:00', // an end time (6pm in this example)
    }
  ];
  closeResult: any;
  startTime: any;
  endTime: any;
  isSubmitSuccess: boolean = false;
  userRole: number = 0;
  minimumTime: any = "09:00:00";
  maximumTime: any = "18:00:00";
  validRange: any = {
    start: '2019-08-15'
  }

  replyText: string = "";
  requestsList: any = [];
  selectedRequest: any = {};
  username : string = '';
  userRole: number = 0;

  meetingList: any = [];
  eventList: any = [];

  meetingId: number = null;
  eventId: number = null;

  actionItem: number = 0;

  constructor(
    private globalService: GlobalService,
    private inquireRequestsService: InquireRequestsService,
    private globals: Globals,
    private calendarService: CalendarService,
    private modalService: NgbModal,
  ) {
    this.username = this.globals.getLoginUsername();
    this.userRole = this.globals.getLoginUserRole();
  }

  ngOnInit() {
    this.getInquireList();
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate( today.getDate() + 1 );
    this.validRange.start = this.globals.getFullDateTime( tomorrow ).substr(0, 10);
    this.userRole = this.globals.getLoginUserRole();
  }

  getInquireList() {
    this.inquireRequestsService.getInquireRequestsList(this.username)
    .then(
      (response:any = []) =>{
        if ( this.userRole == 1 ) {
          this.requestsList = response.data;
        } else {
          let pcname = this.username;
          this.requestsList = response.data.filter(obj => {
            return this.username === obj.email_address;
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
    console.log(data);
    this.inquireRequestsService.updateRequest({
      id: data.id,
      username: this.username,
      email_address : data.email_address,
      status: 1,
      pc_name: data.pc_name,
      mobile_number : data.mobile_number,
      request_status: acceptance ? 'admin_accepted' : 'admin_rejected'
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

  isRejectable(selectedRequest): boolean {
    if ( this.userRole == 1 && ( selectedRequest.request_status == '1' || selectedRequest.request_status == 'pc_requested' ) ) {
      return true;
    } else {
      return false;
    }
  }

  isAcceptable(selectedRequest): boolean {
    if ( this.userRole == 1 && ( selectedRequest.request_status == '1' || selectedRequest.request_status == 'pc_requested' ) ) {
      return true;
    } else {
      return false;
    }
  }

  isSchedulable(selectedRequest): boolean {
    if ( this.userRole != 1 && selectedRequest.request_status == 'admin_accepted' ) {
      return true;
    } else {
      return false;
    }
  }

  showAdminCalendar(): void {

  }

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast(content) {

    this.modalService.open(content, {}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  handleDateClick(arg, content) {

    if ( arg.allDay ) {
      let calendarApi = this.calendarComponent.getApi();
      calendarApi.changeView('timeGridDay');
      calendarApi.gotoDate( arg.dateStr + "T09:00:00Z" );
      calendarApi.setOption('slotDuration', "00:30:00");
    } else {
      let startTimeHours = Number(arg.dateStr.substr(11, 2));
      let startTimeMinutes = Number(arg.dateStr.substr(11, 2));
      let startTimeInMins = (startTimeHours * 60) + startTimeMinutes;
      if ( !(startTimeInMins >= 720 && startTimeInMins < 840) ) {
        this.startTime = arg.dateStr.substr(0, 19);
        this.endTime = this.globals.getFullDateTime( new Date( arg.date.getTime() + ( 30 * 60 * 1000 ) ) ).replace(" ", "T");
        this.modalService.open(content, {}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
    }

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

  addEvent(modal) {

    console.log(modal);

    modal["admin_user_id"] = 1;
    modal["created_by"] = 1;

    this.calendarService.postAdminCalendarRequest(modal)
    .then(
      (response) => {
        this.isSubmitSuccess = true;
      },
      (error) => {
        console.log(error);
      }
    );

  }

  goToDateEvent(modal) {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.changeView('timeGridDay');
    calendarApi.gotoDate( modal.goToSpecificDate + "T09:00:00Z" );
    //
    // let el: HTMLElement = this.closeGoToDate.nativeElement;
    // el.click();
  }

  selectAllow(start, end, jsEvent, view) {

  }

}
