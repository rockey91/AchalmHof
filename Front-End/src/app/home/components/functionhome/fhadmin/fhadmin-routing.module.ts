import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FHAdminComponent } from './fhadmin.component';

const routes: Routes = [
    {
        path: '',
        component: FHAdminComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FHAdminRoutingModule {}
