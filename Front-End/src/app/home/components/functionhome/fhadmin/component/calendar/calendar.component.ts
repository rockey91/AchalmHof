import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
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
  @ViewChild('exampleModal1') modal1: Element

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];
  closeResult: any;
  startTime: any;
  endTime: any;
  isSubmitSuccess: boolean = false;

  constructor(
    private modal: NgbModal,
    private calendarService: CalendarService,
    private globalService: GlobalService,
    private modalService: NgbModal,
    private globals: Globals
  ) {}

  ngOnInit() {
    let today = new Date();
    this.startTime = this.globals.getFullDateTime(new Date()).replace(" ", "T");
    this.endTime = this.globals.getFullDateTime(new Date()).replace(" ", "T");
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

  handleDateClick(arg, content) {

    if ( arg ) {
      console.log(arg);

    }

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

  addEvent(modal) {

    console.log(modal);

    modal["admin_user_id"] = 1;
    modal["created_by"] = 1;

    this.calendarService.postAdminCalendarRequest(modal)
    .then(
      (response) =>{
        this.isSubmitSuccess = true;
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
