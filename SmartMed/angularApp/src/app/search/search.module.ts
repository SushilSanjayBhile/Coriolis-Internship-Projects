import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ComponentsModule } from '../shared/components/components.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
  ],
  declarations: [SearchFormComponent, SearchResultsComponent, AddPatientComponent, PatientDetailsComponent]
})
export class SearchModule { }
