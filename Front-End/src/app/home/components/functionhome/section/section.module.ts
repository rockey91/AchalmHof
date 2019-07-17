import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';

@NgModule({
    imports: [
        CommonModule,
        SectionRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [SectionComponent]
})
export class SectionModule {}
