import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        AdminRoutingModule],
    declarations: [AdminComponent]
})
export class AdminModule {}
