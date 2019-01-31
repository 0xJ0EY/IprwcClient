import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from './shared/services/authentication.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public user = null;
  private subscription: Subscription = null;

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.subscription = this.auth.currentUserObservable.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get isAdmin() {
    if (this.user === null) { return false; }

    for (const role of this.user.roles) {
      if (role.name === 'admin') {
        return true;
      }
    }

    return false;
  }

}
