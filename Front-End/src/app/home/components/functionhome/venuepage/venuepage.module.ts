import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowModule } from 'ng-simple-slideshow';
import {} from '@angular/forms';

import { VenuepageRoutingModule } from './venuepage-routing.module';
import { VenuepageComponent } from './venuepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedPipesModule } from '../../../../shared'

@NgModule({
    imports: [
        CommonModule,
        VenuepageRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        SlideshowModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        SharedPipesModule
    ],
    declarations: [VenuepageComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class VenuepageModule {}
