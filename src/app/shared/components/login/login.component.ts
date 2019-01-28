import {Component, ElementRef, HostListener, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AuthenticationService} from '../../services/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '250px',
        width: '350px'
      })),
      state('closed', style({
        height: 0,
        width: 0
      })),
      transition('closed => open', [
        animate('.25s cubic-bezier(.1,1.45,.35,1)')
      ]),
      transition('closed => open', [
        animate('0s')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit, OnDestroy {

  loading = false;
  active = false;
  user = null;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  errorMessage = '';

  subscription;

  constructor(
    private auth: AuthenticationService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.subscription = this.auth.currentUser.subscribe((user) => {

      console.log(user);
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.loading = true;
    this.errorMessage = '';

    this.auth.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    ).subscribe((resp) => {
      this.loading = false;

    }, (err) => {
      this.errorMessage = 'Ongeldige gebruikersgegevens';
      this.loading = false;
    });

  }

  logout() {
    this.auth.logout();
  }

  @HostListener('document:click', ['$event'])
  public onClickOutsideComponent(evt) {
    this.active = this.elementRef.nativeElement.contains(evt.target);

    if (this.active === false) {
      // Reset error message
      this.errorMessage = '';
    }
  }

}
