import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RequestsComponent } from './requests.component';
import { RequestsRoutingModule } from './requests-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
@NgModule({
  declarations: [
    RequestsComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    // FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RequestsModule { }
