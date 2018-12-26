import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartComponent } from './shoppingcart.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    ShoppingcartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingcartComponent
  ],
  providers: [
    CartService
  ]
})
export class ShoppingcartModule { }
