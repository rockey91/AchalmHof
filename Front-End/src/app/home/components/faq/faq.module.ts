import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowModule } from 'ng-simple-slideshow';
import { HeaderModule } from '../header/header.module';
import { FooterModule} from './../footer/footer.module';
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
    NgbModule.forRoot(),
    HeaderModule,
    FooterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class FaqModule { }
