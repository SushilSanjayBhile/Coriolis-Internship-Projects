import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../interfaces/patient';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() patients: Patient[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) { }

  ngOnInit() {
  }

  gotoDetails(id) {
    this.router.navigate(['/patient', 'details', id]);
  }

  addVisit(id) {
    this.router.navigate(['/visit', 'add', 'patient', id]);
  }
}
