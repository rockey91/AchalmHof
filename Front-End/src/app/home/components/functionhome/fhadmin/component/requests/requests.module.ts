import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestsComponent} from './requests.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgbModule.forRoot()
    ],
    declarations: [
        RequestsComponent
    ],
    exports: [
        RequestsComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class inquireRequestModule { }
