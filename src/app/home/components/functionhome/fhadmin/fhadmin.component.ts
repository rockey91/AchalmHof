import { Component, OnInit } from '@angular/core';

import { InquireRequestsService } from '../../../../shared';

@Component({
  selector: 'app-fhadmin',
  templateUrl: './fhadmin.component.html',
  styleUrls: ['./fhadmin.component.scss']
})
export class FHAdminComponent implements OnInit {

  replyText: string = "";
  requestsList: any = [];

  constructor(
    private inquireRequestsService: InquireRequestsService
  ) { }

  selectedRequest: any = {};

  ngOnInit() {
    this.inquireRequestsService.getInquireRequestsList()
    .then(
      (response) =>{
        this.requestsList = response[0].data.data;
      },
      (error) => {
          // alert(error);
          console.log(error);
      }
    );
  }

  showMoreDetails( index ): void {
    this.selectedRequest = {
      reqNo: index,
      eventType: 'Birthday',
      eventDate: '12-Oct-2019'
    }
  }

  deleteMeeting() {
    var deleteEvent= confirm("are you sure!. You want to delete this event info request from the calendar")
  }

  sendReply(accepted) {
    if ( accepted ) {
      this.inquireRequestsService.updateRequest()
      .then(
        (response) =>{
          alert("Your response with portal credentials is shared with PC to schedule the appointment.");
        },
        (error) => {
            // alert(error);
            console.log(error);
        }
      );
    }
  }

}
