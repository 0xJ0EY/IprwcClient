import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  url = '';
  error = '';
  loading = false;

  user = { username: '', password: '' };

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.url = this.route.snapshot.queryParams['url'] || '/';

  }

  onSubmit() {
    this.loading = true;
    this.error = '';

    this.authService.login(
      this.user.username,
      this.user.password
    ).subscribe(() => {
      this.router.navigate([this.url]);

    }, () => {
      this.error = 'Er bestaat geen gebruiker met de ingevulde gegevens.';
      this.loading = false;
    });

  }

}
