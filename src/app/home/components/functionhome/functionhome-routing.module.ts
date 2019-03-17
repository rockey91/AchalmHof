import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionhomeComponent } from './functionhome.component';

const routes: Routes = [
    {
        path: '',
        component: FunctionhomeComponent,
        children: [
            { path: '', redirectTo: 'section', pathMatch: 'prefix' },
            { path: 'section', loadChildren: './section/section.module#SectionModule' },
            { path: 'venuepage', loadChildren: './venuepage/venuepage.module#VenuepageModule' },
            { path: 'fhadmin', loadChildren: './fhadmin/fhadmin.module#FHAdminModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FunctionHomeRoutingModule {}
