import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FooterRoutingModule } from './footer-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FooterRoutingModule,
    TranslateModule,
    SlideshowModule
  ],
  exports : [ FooterComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FooterModule {

}
