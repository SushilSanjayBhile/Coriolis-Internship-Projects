import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, switchAll } from 'rxjs/operators';
import { MessagingService } from './messaging/messaging.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor(private msgSrv: MessagingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map( (event: HttpEvent<any>) => {
        return event;
      }),
      catchError( (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.msgSrv.handleError(err);
        }
        return throwError(err);
      })
    );
  }
}
