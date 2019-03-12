import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, RequestRoutingModule, PageHeaderModule],
    declarations: [RequestComponent]
})
export class RequestModule {}
