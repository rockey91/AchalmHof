import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowModule } from 'ng-simple-slideshow';

import { VenuepageRoutingModule } from './venuepage-routing.module';
import { VenuepageComponent } from './venuepage.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        VenuepageRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        SlideshowModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [VenuepageComponent]
})
export class VenuepageModule {}
