import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (req.url.toString() != "https://127.0.0.1:8000/api/login"){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('auth_tkn')}`
        }
      });
    }
    return next.handle(req);
  }
}
