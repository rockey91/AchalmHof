import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fhadmin',
  templateUrl: './fhadmin.component.html',
  styleUrls: ['./fhadmin.component.scss']
})
export class FHAdminComponent implements OnInit {

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
