import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { InquireRequestsService } from '../../../../shared';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from 'ng-fullcalendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-fhadmin',
  templateUrl: './fhadmin.component.html',
  styleUrls: ['./fhadmin.component.scss']
})
export class FHAdminComponent implements OnInit {

  replyText: string = "";
  requestsList: any = [];
  selectedRequest: any = {};

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  meetingList: any = [];
  eventList: any = [];

  meetingId: number = null;
  eventId: number = null;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;

  constructor(
    private modal: NgbModal,
    private inquireRequestsService: InquireRequestsService
  ) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngOnInit() {
    this.inquireRequestsService.getInquireRequestsList()
    .then(
      (response) =>{
        this.requestsList = response;
      },
      (error) => {
        alert(error);
        console.log(error);
      }
    );

    this.inquireRequestsService.getMeetingList()
    .then(
      (response) =>{
        this.meetingList = response;
      },
      (error) => {
        alert(error);
        console.log(error);
      }
    );

    this.inquireRequestsService.getEventList()
    .then(
      (response) =>{
        this.eventList = response;
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
      (response) =>{
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
