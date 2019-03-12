import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss'],
    animations: [routerTransition()]
})
export class ManageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
