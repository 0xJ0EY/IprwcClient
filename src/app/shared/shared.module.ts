import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import {HeaderComponent} from './components/header/header.component';
import {CategoryService} from './services/category.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ShoppingcartComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    ShoppingcartComponent,
    NavbarComponent
  ],
  providers: [
    CategoryService
  ]
})
export class SharedModule { }
