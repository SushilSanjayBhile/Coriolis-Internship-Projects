import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitRoutingModule } from './visit-routing.module';
import { AddVisitComponent } from './add-visit/add-visit.component';
import { ListVisitsComponent } from './list-visits/list-visits.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    VisitRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
  ],
  declarations: [AddVisitComponent, ListVisitsComponent]
})
export class VisitModule { }
