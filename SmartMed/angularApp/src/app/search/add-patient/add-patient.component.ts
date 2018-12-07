import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../../shared/services/patient/patient.service';
import { Subject } from 'rxjs';

import { GENDERS } from '../constants';
import { Patient } from '../../interfaces/patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patientForm: FormGroup;

  getPhoto = new Subject();

  genders = GENDERS;
  formData = new FormData();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private srv: PatientService) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      phone: '',
      address: '',
      photoFile: ['', Validators.required],
      dob: '',
      relations: '',
      aadhar_number: '',
      file_no: '',
      id: null
    });

    this.getPhoto.subscribe((value) => {
      console.log('value');
      if (value['file_name']) {
        this.patientForm.get('photoFile').setValue('true');
      } else {
        this.patientForm.get('photoFile').setValue('false');
      }
      this.formData.set('photo', value['file'], value['file_name']);
    });
  }

  ngOnInit() {
  }

  initializeFormData() {
    Object.keys(this.patientForm.controls).forEach( key => {
        console.log(this.patientForm.get(key).value);
        this.formData.set(key, this.patientForm.get(key).value);
    });
  }

  dateChanged(event) {
    console.table(event);
  }

  addPatient() {
    if ( this.patientForm.valid ) {
      this.initializeFormData();
      this.srv.post(this.formData).subscribe( (data: Patient) => {
        console.log(this.patientForm.value);
        this.router.navigate(['/patient', 'details', data.id]);
      });
    }
  }

  resetForm() {
    console.log('reset clicked');
    this.patientForm.reset();
    this.patientForm.markAsPristine();
  }
}
