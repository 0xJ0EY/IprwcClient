import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartComponent } from './shoppingcart.component';
import { CartService } from './cart.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShoppingcartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ShoppingcartComponent
  ],
  providers: [
    CartService
  ]
})
export class ShoppingcartModule { }
