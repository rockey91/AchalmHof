import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionhomeComponent } from './functionhome.component';
import { FunctionHomeRoutingModule } from './functionhome-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './../header/header.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './../footer/footer.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FunctionHomeRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FunctionhomeComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class FunctionhomeModule { }
