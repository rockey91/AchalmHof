import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenuepageComponent } from './venuepage.component';

const routes: Routes = [
    {
        path: '',
        component: VenuepageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VenuepageRoutingModule {}
