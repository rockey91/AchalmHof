import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderRoutingModule } from './header-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    TranslateModule,
    SlideshowModule,
    NgbDropdownModule
  ],
  exports : [ HeaderComponent ],
})
export class HeaderModule {

}
