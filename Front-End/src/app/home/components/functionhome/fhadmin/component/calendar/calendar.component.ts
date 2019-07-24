import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarService, GlobalService } from '../../../../../../shared';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick

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
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarViewComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  constructor(
    private modal: NgbModal,
    private calendarService: CalendarService,
    private globalService: GlobalService
  ) {}

  ngOnInit() {

    // this.calendarService.getAdminCalendarList()
    // .then(
    //   (response:any = []) => {
    //     var data = response.data;
    //     var calData = []
    //     if ( data && data.length ) {
    //       for(var i = 0; i<data.length; i++) {
    //         calData.push({
    //           start:addHours(startOfDay(data[i].schedule_start_time), 2),
    //           end: addHours(startOfDay(data[i].schedule_end_time),2),
    //           title: data[i].schedule_title,
    //           color: '#aaa',
    //           actions: this.actions,
    //           allDay: true,
    //           resizable: {
    //             beforeStart: true,
    //             afterEnd: true
    //           },
    //           draggable: true
    //         })
    //       }
    //     }
    //     this.events = calData;
    //     console.log(this.events)
    //   },
    //   (error) => {
    //     alert(error);
    //     console.log(error);
    //   }
    // );

  }

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }

}
