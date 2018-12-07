import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../../shared/services/patient/patient.service';
import { map, switchMap, debounceTime } from 'rxjs/operators';
import { Patient } from '../../interfaces/patient';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MAX_SEARCH_RESULTS } from '../constants';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  searchPatientForm: FormGroup;

  patients: Patient[];
  maxSearchResults = MAX_SEARCH_RESULTS;
  noResults = false;
  moreResults = false;

  constructor(
    private fb: FormBuilder,
    private srv: PatientService,
    private breakpointObserver: BreakpointObserver) {
    this.searchPatientForm = fb.group({ name: ['', Validators.required ]});
  }

  ngOnInit() {
    this.searchPatientForm.get('name').valueChanges.pipe(
      debounceTime(500),
      switchMap( (data: string) => {
        return this.srv.get('', '', 0, 0, data);
      }),
      map( (data: any) => {
        return data.results;
      })
    ).subscribe( (data: any) => {
      const total = data.length;

      this.noResults = !total ? true : false;
      this.moreResults = total > this.maxSearchResults ? true : false;
      this.patients =  total < this.maxSearchResults ? data : [];
    });
  }

}
