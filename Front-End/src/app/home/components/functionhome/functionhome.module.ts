import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionhomeComponent } from './functionhome.component';
import { FunctionHomeRoutingModule } from './functionhome-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from './../header/header.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterModule } from './../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedPipesModule } from '../../../shared';

@NgModule({
  imports: [
    CommonModule,
    FunctionHomeRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [
    FunctionhomeComponent
  ]
})
export class FunctionhomeModule { }
