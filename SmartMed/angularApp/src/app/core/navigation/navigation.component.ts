import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter, pairwise } from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRouteSnapshot, ActivatedRoute, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  showSearch = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private route: ActivatedRoute) {
    const snapshot = route.snapshot;
  }

  ngOnInit() {
    this.router.events.pipe(
      filter( e => e instanceof RoutesRecognized),
      pairwise()
    ).subscribe( (e: any[]) => {
        console.log(e[1].urlAfterRedirects);
        if (['/patient'].indexOf(e[1].urlAfterRedirects) === -1) {
          this.showSearch = true;
        } else {
          this.showSearch = false;
        }
    });
  }

}
