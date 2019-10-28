import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarService, GlobalService, Globals } from '../../../../../../shared';
import { Subject } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarViewComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template
  @ViewChild('closeGoToDate') closeGoToDate: ElementRef<HTMLElement>;

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = false;
  calendarEvents: EventInput[] = [];
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
  scheduleTitle: string;
  scheduleDesc: string;
  startTime: any;
  endTime: any;
  isSubmitSuccess: boolean = false;
  userRole: number = 0;
  minimumTime: any = "09:00:00";
  maximumTime: any = "18:00:00";
  validRange: any = {
    start: '2019-08-15'
  }

  constructor(
    private modal: NgbModal,
    private calendarService: CalendarService,
    private globalService: GlobalService,
    private modalService: NgbModal,
    private globals: Globals
  ) {}

  ngOnInit() {
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate( today.getDate() + 1 );
    this.validRange.start = this.globals.getFullDateTime( tomorrow ).substr(0, 10);
    this.userRole = this.globals.getLoginUserRole();

    this.getCalendarEvents();
    // this.calendarEvents = [
    //   {
    //     id:    '1',
    //     start: '2019-10-24T09:00:00',
    //     end:   '2019-10-24T09:30:00'
    //   },
    //   {
    //     id:    '2',
    //     start: '2019-10-24T09:30:00',
    //     end:   '2019-10-24T10:00:00'
    //   },
    //   {
    //     id:    '3',
    //     start: '2019-10-24T10:00:00',
    //     end:   '2019-10-24T10:30:00'
    //   },
    //   {
    //     id:    '4',
    //     start: '2019-10-24T10:30:00',
    //     end:   '2019-10-24T11:00:00'
    //   },
    //   {
    //     id:    '5',
    //     start: '2019-10-24T11:00:00',
    //     end:   '2019-10-24T11:30:00'
    //   },
    //   {
    //     id:    '6',
    //     start: '2019-10-24T11:30:00',
    //     end:   '2019-10-24T12:00:00'
    //   },
    //   {
    //     id:    '7',
    //     start: '2019-10-24T14:00:00',
    //     end:   '2019-10-24T14:30:00'
    //   },
    //   {
    //     id:    '8',
    //     start: '2019-10-24T14:30:00',
    //     end:   '2019-10-24T15:00:00'
    //   },
    //   {
    //     id:    '9',
    //     start: '2019-10-24T15:00:00',
    //     end:   '2019-10-24T15:30:00'
    //   },
    //   {
    //     id:    '10',
    //     start: '2019-10-24T15:30:00',
    //     end:   '2019-10-24T16:00:00'
    //   },
    //   {
    //     id:    '11',
    //     start: '2019-10-24T16:00:00',
    //     end:   '2019-10-24T16:30:00'
    //   },
    //   {
    //     id:    '12',
    //     start: '2019-10-24T16:30:00',
    //     end:   '2019-10-24T17:00:00'
    //   },
    //   {
    //     id:    '13',
    //     start: '2019-10-24T17:00:00',
    //     end:   '2019-10-24T17:30:00'
    //   },
    //   {
    //     id:    '14',
    //     start: '2019-10-24T17:30:00',
    //     end:   '2019-10-24T18:00:00'
    //   }
    // ];
  }

  getCalendarEvents() {
    this.calendarService.getAdminCalendarList()
    .then(
      (response:any = []) =>{
        var allEvents = response.data;

        var eventObjs = allEvents.map(obj => {
          return Object.assign({}, obj, {
            id: obj.id,
            start: obj.schedule_start_time.substr(0, 19),
            end: obj.schedule_end_time.substr(0, 19),
            title: obj.schedule_title,
            desc: obj.schedule_desc
          });
        });

        this.calendarEvents = eventObjs;

      },
      (error) => {
        alert(error);
        console.log(error);
      }
    );
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
  }

  selectAllow(start, end, jsEvent, view) {

  }

  eventClickAction($eventData, modalId){
    let event = $eventData.event;
    let startTimeHours = event.start.getHours();
    let startTimeMinutes = event.start.getMinutes();
    let startTimeInMins = (startTimeHours * 60) + startTimeMinutes;
    if ( !(startTimeInMins >= 720 && startTimeInMins < 840) ) {
      let eventObj = this.calendarEvents.find((obj) => { return obj.id == event.id; });
      this.scheduleTitle = eventObj.schedule_title;
      this.scheduleDesc = eventObj.schedule_desc;
      this.startTime = this.globals.getFullDateTime( event.start ).replace(" ", "T");
      this.endTime = this.globals.getFullDateTime( new Date( event.start.getTime() + ( 30 * 60 * 1000 ) ) ).replace(" ", "T");
      this.modalService.open(modalId, {}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

}
