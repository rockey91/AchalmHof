import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './../../header/header.module';
import { FooterModule } from './../../footer/footer.module';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';

@NgModule({
    imports: [
        CommonModule,
        SectionRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        HeaderModule,
        FooterModule
    ],
    declarations: [SectionComponent]
})
export class SectionModule {}
