import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service'


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private service: BackendService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.shiftDates(request.body);
    // add auth header with jwt if user is logged in and request is to the api url
    return next.handle(request);
  }
}
