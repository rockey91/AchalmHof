import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    ManageComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ManageModule { }
