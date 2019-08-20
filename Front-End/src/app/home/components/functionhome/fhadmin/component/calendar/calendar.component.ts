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
