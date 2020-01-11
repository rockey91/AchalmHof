import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowModule } from 'ng-simple-slideshow';
import { HeaderModule } from '../header/header.module';
import { FooterModule} from './../footer/footer.module';

import { ImpressumRoutingModule } from './impressum-routing.module';
import { ImpressumComponent } from './impressum.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ImpressumRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        SlideshowModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        HeaderModule,
        FooterModule

    ],
    declarations: [ ImpressumComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ImpressumModule {}
