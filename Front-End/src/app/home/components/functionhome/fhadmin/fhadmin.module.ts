import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FHAdminComponent } from './fhadmin.component';
import { FHAdminRoutingModule } from './fhadmin-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { RequestsComponent } from './component/requests/requests.component';
import { ManageComponent } from './component/manage/manage.component';
import { CalendarViewComponent } from './component/calendar/calendar.component'
import { CalendarModule, DateAdapter } from 'angular-calendar';

@NgModule({
  declarations: [
    FHAdminComponent,
    RequestsComponent,
    ManageComponent,
    CalendarViewComponent
  ],
  imports: [
    CommonModule,
    FHAdminRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    CalendarModule,
    DateAdapter,
    // FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FHAdminModule { }
