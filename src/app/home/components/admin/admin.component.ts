import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  selectedRequest: any = {};

  ngOnInit() {

  }

  showMoreDetails( index ): void {
    this.selectedRequest = {
      label1: index,
      label2: 'value2',
      label3: 'value3'
    }
  }

}
