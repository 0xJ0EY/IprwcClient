import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { ShoppingcartModule } from './shoppingcart/shoppingcart.module';

@NgModule({
  declarations: [],
  imports: [
    ShoppingcartModule,
    HeaderModule,
    CommonModule
  ],
  exports: [
    ShoppingcartModule,
    HeaderModule
  ]
})
export class SharedModule { }
