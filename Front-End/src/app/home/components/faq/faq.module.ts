import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowModule } from 'ng-simple-slideshow';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    SlideshowModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ]
})
export class FaqModule { }
