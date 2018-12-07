import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { Observable, Subject} from 'rxjs';
import {merge} from 'rxjs';
import {of as observableOf} from 'rxjs';
import { map, startWith, switchMap, catchError, debounceTime } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { VisitService } from '../../shared/services/visit/visit.service';

@Component({
  selector: 'app-list-visits',
  templateUrl: './list-visits.component.html',
  styleUrls: ['./list-visits.component.css']
})
export class ListVisitsComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Output() dataLoad = new EventEmitter();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'patient', 'diagnosis', 'timestamp'
  ];
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  selectedRows: Array<string>;
  allSelected = false;
  search = '';
  filter = false;
  patientId: number;
  private searchStream: Subject<string> = new Subject();

  constructor(private srv: VisitService, private route: ActivatedRoute, private router: Router) {
    this.parseParams();
  }

  /**
   * Looks for route params and if present,
   * fetches the data for that candidate
   */
  parseParams() {
    this.route.params.subscribe(params => {
      if (Object.keys(params).indexOf('id') !== -1) {
        this.patientId = params['id'];
        // this.fetchPatient();
      }
    });
  }

  ngOnInit() {
    this.searchStream.pipe(
      debounceTime(500),
    ).subscribe((searchValue) => {
      this.search = searchValue;
      this.initTable();
    });
    this.initTable();
  }

  initTable() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.srv.getVisitsByPatient(this.sort.active, this.sort.direction,
            this.paginator.pageSize, this.paginator.pageIndex, this.patientId);
        }),
        map( (data: any) => {
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
