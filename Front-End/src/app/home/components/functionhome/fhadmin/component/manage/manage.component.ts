import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GlobalService } from '../../../../../../shared';
import { OptionsInput } from '@fullcalendar/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  replyText: string = "";
  requestsList: any = [];
  selectedRequest: any = {};

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  meetingList: any = [];
  eventList: any = [];

  meetingId: number = null;
  eventId: number = null;

  constructor(
    private modal: NgbModal,
    private globalService: GlobalService
  ) {}

  ngOnInit() {

  }

}
