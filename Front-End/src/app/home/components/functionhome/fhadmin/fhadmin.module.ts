import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FHAdminComponent } from './fhadmin.component';
import { FHAdminRoutingModule } from './fhadmin-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    FHAdminComponent,
  ],
  imports: [
    CommonModule,
    FHAdminRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    FullCalendarModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FHAdminModule { }
