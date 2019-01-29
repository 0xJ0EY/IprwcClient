import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page/index-page.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingcartPageComponent } from './shoppingcart-page/shoppingcart-page.component';
import { CategoryPageModule } from './category-page/category-page.module';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    IndexPageComponent,
    ShoppingcartPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoryPageModule
  ],
  exports: [
    IndexPageComponent,
    ShoppingcartPageComponent
  ]
})
export class PagesModule { }
