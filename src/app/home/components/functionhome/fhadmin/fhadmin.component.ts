import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fhadmin',
  templateUrl: './fhadmin.component.html',
  styleUrls: ['./fhadmin.component.scss']
})
export class FHAdminComponent implements OnInit {

  replyText: string = "";

  constructor() { }

  selectedRequest: any = {};

  ngOnInit() {

  }

  showMoreDetails( index ): void {
    this.selectedRequest = {
      reqNo: index,
      eventType: 'Birthday',
      eventDate: '12-Oct-2019'
    }
  }

  sendReply() {
    alert(this.replyText);
  }

}
