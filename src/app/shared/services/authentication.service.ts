import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Auth} from '../models/auth.model';
import {Router} from '@angular/router';
import {apiRoutes} from '../../../environments/api-routes';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: BehaviorSubject<User> = new BehaviorSubject(null);
  private auth: BehaviorSubject<Auth> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.load();
  }

  load() {
    if (!localStorage.getItem('authenticated_user')) {
      return;
    }

    const auth: Auth = <Auth>JSON.parse(localStorage.getItem('authenticated_user'));
    this.auth.next(auth);
    this.user.next(auth.user);
  }

  login(username: string, password: string): Observable<any> {

    const body = new FormData();
    body.append('username', username);
    body.append('password', password);

    return this.http.post<User>(environment.api + apiRoutes.auth.login, body).pipe(map(resp => {
      const auth = new Auth();
      const user = <User> resp;

      if (user !== null) {
        auth.user = user;
        auth.token = Auth.generateToken(username, password);

        localStorage.setItem('authenticated_user', JSON.stringify(auth));
        this.user.next(user);
        this.auth.next(auth);

        console.log(auth);
      }

      return user;
    }));
  }

  get currentAuth(): Auth {
    return this.auth.value;
  }

  get currentAuthObservable(): Observable<Auth> {
    return this.auth.asObservable();
  }

  get currentUser(): User {
    return this.user.value;
  }

  get currentUserObservable(): Observable<User> {
    return this.user.asObservable();
  }

  logout() {
    localStorage.removeItem('authenticated_user');
    this.user.next(null);
    this.auth.next(null);
    this.router.navigate(['/']);
  }

}
