import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Visit } from '../../../interfaces/visit';
import { APIService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VisitService extends APIService {

  baseUrl = '/clinic/visits/';

  visits: Visit[];
  constructor(protected http: HttpClient) {
    super(http);
  }

  getVisitsByPatient(sort?: string, order?: string, size?: number, page?: number, patientId?: number, search?: string) {
    let url = 'clinic/patients/' + patientId + '/visits/';
    url += `?sort=${sort}&order=${order}&size=${size}&page=${page + 1}`;
    if (search) {
      url += `&search=${search}`;
    }
    return this.http.get(url);
  }

}
