import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowModule } from 'ng-simple-slideshow';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PrivacyRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        SlideshowModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
    ],
    declarations: [PrivacyComponent]
})
export class PrivacyModule {}
