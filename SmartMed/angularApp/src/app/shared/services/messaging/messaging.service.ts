import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  errCodes = [400, 404, 403];

  constructor() { }

  handleError(err) {
    if (this.errCodes.indexOf(err.status) !== -1) {
      switch (err.status) {
        case 404:
          console.log('Resource not found');
          alert('Resource not found');
          break;
        case 500:
          console.log('Server Error =', err.error, ';');
          alert('Internal Server Error. Sorry for the inconvenience. Try again or contact Admin');
          break;
        default:
          console.log('err.status =', err.status, ';');
          console.log('err.error =', err.error, ';');
          alert('This is Embarassing. Don\'t know what went wrong. Try again or contact Admin');
      }
    }
  }
}
