import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import {HeaderComponent} from './components/header/header.component';
import {CategoryService} from './services/category.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ShoppingcartComponent,
    NavbarComponent,
    LoginComponent,
    AdminMenuComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    AdminMenuComponent
  ],
  providers: [
    CategoryService
  ]
})
export class SharedModule { }
