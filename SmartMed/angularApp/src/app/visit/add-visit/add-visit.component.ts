import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Visit } from '../../interfaces/visit';
import { VisitService } from '../../shared/services/visit/visit.service';
import { PatientService } from '../../shared/services/patient/patient.service';
import { Patient } from '../../interfaces/patient';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css']
})
export class AddVisitComponent implements OnInit {

  visitForm: FormGroup;

  patientId: number;
  patient: Patient;

  constructor(
    private srv: VisitService,
    private srvP: PatientService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

    this.visitForm = this.fb.group({
      patient: [null, Validators.required],
      diagnosis: ['', Validators.required]
    });

    this.parseParams();

  }

  ngOnInit() {
    this.fetchPatient();
  }

  addVisit() {
    const data = this.visitForm.value;
    this.srv.post(data)
      .subscribe( (d: Visit) => {
        this.router.navigate(['/patient', 'details', d.patient]);
      }, (error) => {
      });
  }

  fetchPatient() {
    if (!this.patientId) {
      this.router.navigate(['/patient', 'search']);
    } else {
      this.srvP.getDetails(this.patientId)
        .subscribe((data: Patient) => {
          this.patient = data;
          this.visitForm.get('patient').setValue(this.patient.id);
        }, (error) => {
              alert(error);
          });
    }
  }

  /**
   * Looks for route params and if present,
   * fetches the data for that candidate
   */
  parseParams() {
    this.route.params.subscribe(params => {
      if (Object.keys(params).indexOf('id') !== -1) {
        this.patientId = params['id'];
      }
    });
  }

}
