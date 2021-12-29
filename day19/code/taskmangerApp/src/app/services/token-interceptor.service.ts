import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // return token
    let auth = this.authService.getToken()

    // set token headers
    let tokenReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${auth}`
      }
    })
    return next.handle(tokenReq)

  }
}
