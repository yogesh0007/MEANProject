import {Component} from '@angular/core';
import {SignupComponent} from './signup.component';
import {SigninComponent} from './signin.component';
import {LogoutComponent} from './logout.component';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'my-auth',
  template: `
    <header class="row spacing">
      <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-tabs">
        <li><a [routerLink]="['./signup']">SignUp</a></li>
        <li><a [routerLink] = "['./signin']">Signin</a></li>
        <li><a [routerLink] = "['./logout']">Logout</a></li>
        </ul>
      </nav>
    </header>
    <div class="row spacing">
    <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  styles: [`
      .router-link-active{
        color: #555;
        cursor: default;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-color: transparent;
      }
    `]
})
@Routes([
  {path: '/signup', component: SignupComponent},
  {path: '/signin', component: SigninComponent},
  {path: '/logout', component: LogoutComponent}
])

export class AuthenticationComponent{}
