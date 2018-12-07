import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../../../interfaces/patient';
import { map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';
import { APIService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends APIService {

  baseUrl = '/clinic/patients/';

  constructor(protected http: HttpClient) {
    super(http);
  }

}
