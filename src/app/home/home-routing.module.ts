import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'functionhalls',
        loadChildren: './components/functionhome/functionhome.module#FunctionhomeModule'
    },
    {
        path: 'admin',
        loadChildren: './components/admin/admin.module#AdminModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
