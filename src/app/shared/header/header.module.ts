import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ShoppingcartModule } from '../shoppingcart/shoppingcart.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ShoppingcartModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
