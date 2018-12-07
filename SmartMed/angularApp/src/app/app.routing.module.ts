import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    { path: 'patient', loadChildren: './search/search.module#SearchModule' },
    { path: 'visit', loadChildren: './visit/visit.module#VisitModule' },
    { path: '', redirectTo: 'patient', pathMatch: 'full' },
    { path: '**', redirectTo: 'patient' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
