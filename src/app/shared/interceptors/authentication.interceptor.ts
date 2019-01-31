import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Auth} from '../models/auth.model';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthenticationService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth: Auth = this.authService.currentAuth;

    if (this.isSameOrigin(req) && auth !== null) {
      // Append auth headers

      req = req.clone({
        setHeaders: {
          Authorization: `Basic ${auth.token}`
        }
      });
    }

    return next.handle(req);
  }


  private isSameOrigin(req: HttpRequest<any>): boolean {
    return req.url.indexOf(environment.api) === 0;
  }

}
