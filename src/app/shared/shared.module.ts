import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import {HeaderComponent} from './components/header/header.component';
import {CategoryService} from './services/category.service';

@NgModule({
  declarations: [
    HeaderComponent,
    ShoppingcartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ShoppingcartComponent
  ],
  providers: [
    CategoryService
  ]
})
export class SharedModule { }
