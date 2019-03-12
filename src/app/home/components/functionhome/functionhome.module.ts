import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionhomeComponent } from './functionhome.component';
import { FunctionHomeRoutingModule } from './functionhome-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './../header/header.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './../footer/footer.component';

@NgModule({
  declarations: [
    FunctionhomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FunctionHomeRoutingModule,
    TranslateModule,
    NgbDropdownModule
  ]
})
export class FunctionhomeModule { }
