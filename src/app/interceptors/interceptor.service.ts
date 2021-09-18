import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorHeader implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // modify request
    request = request.clone({
      setHeaders: {
        'Accept': `application/json`,
      }
    });

    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
          }
        }, error => {
        })
      );
  }
}
