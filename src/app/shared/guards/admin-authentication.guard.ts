import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Auth} from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AdminAuthenticationGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if (localStorage.getItem('authenticated_user')) {

      const auth: Auth = <Auth>JSON.parse(localStorage.getItem('authenticated_user'));

      if (auth.user === null) {
        return false;
      }

      for (const role of auth.user.roles) {
        if (role.name === 'admin') {
          return true;
        }
      }

      return false;
    }

    this.router.navigate(['/login'], { queryParams: { url: state.url }});
    return false;
  }

}
