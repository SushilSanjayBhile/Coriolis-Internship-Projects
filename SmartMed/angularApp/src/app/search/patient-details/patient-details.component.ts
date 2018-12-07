import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../shared/services/patient/patient.service';
import { Patient } from '../../interfaces/patient';
import { debounceTime, startWith, switchMap, map, catchError } from 'rxjs/operators';
import { MatSort, MatPaginator, MatTable, MatTableDataSource } from '@angular/material';
import { Subject, of as observableOf, merge } from 'rxjs';
import { VisitService } from '../../shared/services/visit/visit.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Output() dataLoad = new EventEmitter();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'timestamp', 'diagnosis'
  ];
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  search = '';
  filter = false;
  patientId: number;
  private searchStream: Subject<string> = new Subject();

  patient: Patient = null;
  patientProps: {}[];

  constructor(
    private srv: PatientService,
    private vsrv: VisitService,
    private route: ActivatedRoute,
    private router: Router) {

      this.patientProps = [
        { 'key': 'gender', 'label': 'Gender', 'icon': 'wc'},
        { 'key': 'age', 'label': 'Age', 'icon': 'timelapse'},
        { 'key': 'phone', 'label': 'Phone', 'icon': 'phone'},
        { 'key': 'aadhar_number', 'label': 'Aadhar', 'icon': 'featured_video'},
        { 'key': 'file_no', 'label': 'File no.', 'icon': 'folder'},
        { 'key': 'address', 'label': 'Address', 'icon': 'person_pin_circle'}
      ];
  }

  fetchPatient() {
    if (!this.patientId) {
      this.router.navigate(['/patient', 'search']);
    } else {
      this.srv.getDetails(this.patientId).pipe(debounceTime(2000))
        .subscribe((data: Patient) => {
          this.patient = data;
          this.initTable();
        }, (error) => console.table(error));
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
        this.fetchPatient();
      }
    });
  }

  ngOnInit() {
    this.parseParams();
    this.searchStream.pipe(
      debounceTime(500),
    ).subscribe((searchValue) => {
      this.search = searchValue;
      this.initTable();
    });
  }

  initTable() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.vsrv.getVisitsByPatient(this.sort.active, this.sort.direction,
            this.paginator.pageSize, this.paginator.pageIndex, this.patientId);
        }),
        map((data: any) => {
          this.resultsLength = data.count;
          this.dataLoad.emit(this.resultsLength);
          return data.results;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf([]);
        })
      ).subscribe((data: any[]) => {
        this.dataSource.data = data;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.searchStream.next(filterValue);
  }

  toggleSearch() {
    this.filter = !this.filter;

    if (!this.filter) {
      // reset search;
      this.search = '';
      this.initTable();
    }
  }
}
