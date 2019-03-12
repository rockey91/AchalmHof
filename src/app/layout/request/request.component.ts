import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-request',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.scss'],
    animations: [routerTransition()]
})
export class RequestComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
