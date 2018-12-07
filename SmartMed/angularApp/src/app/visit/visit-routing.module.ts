import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVisitComponent } from './add-visit/add-visit.component';
import { ListVisitsComponent } from './list-visits/list-visits.component';

const routes: Routes = [
  { path: '', component: ListVisitsComponent },
  { path: 'patient/:id', component: ListVisitsComponent },
  { path: 'add/patient/:id', component: AddVisitComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitRoutingModule { }
