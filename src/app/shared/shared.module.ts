import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import {HeaderComponent} from './components/header/header.component';
import {CategoryService} from './services/category.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ShoppingcartComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
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
