import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Auth} from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    if (!localStorage.getItem('authenticated_user')) {
      return;
    }

    const auth: Auth = <Auth>JSON.parse(localStorage.getItem('authenticated_user'));
    this.user.next(auth.user);
  }

  login(username: string, password: string): Observable<any> {

    const body = new FormData();
    body.append('username', username);
    body.append('password', password);

    return this.http.post<User>(environment.routes.auth.login, body).pipe(map(resp => {
      const auth = new Auth();
      const user = <User> resp;


      console.log(auth);
      console.log(user);
      console.log(resp);

      if (user !== null) {
        auth.user = user;
        auth.token = Auth.generateToken(username, password);


        localStorage.setItem('authenticated_user', JSON.stringify(auth));
        this.user.next(user);
      }

      return user;
    }));
  }

  get currentUser(): Observable<User> {
    return <Observable<User>>this.user;
  }

  logout() {
    localStorage.removeItem('authenticated_user');
    this.user.next(null);
  }

}
