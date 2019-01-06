import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionhomeComponent } from './functionhome.component';

const routes: Routes = [
    {
        path: '',
        component: FunctionhomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FunctionHomeRoutingModule {}
