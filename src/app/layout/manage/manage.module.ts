import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ManageRoutingModule, PageHeaderModule],
    declarations: [ManageComponent]
})
export class ManageModule {}
