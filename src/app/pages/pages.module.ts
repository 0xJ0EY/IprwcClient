import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page/index-page.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingcartPageComponent } from './shoppingcart-page/shoppingcart-page.component';
import { CategoryPageModule } from './category-page/category-page.module';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule} from '@angular/forms';
import { OrderPageComponent } from './order-page/order-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    IndexPageComponent,
    ShoppingcartPageComponent,
    LoginPageComponent,
    OrderPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CategoryPageModule,
    RouterModule
  ],
  exports: [
    IndexPageComponent,
    ShoppingcartPageComponent
  ]
})
export class PagesModule { }
