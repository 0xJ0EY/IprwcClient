import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page/index-page.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ShoppingcartPageComponent } from './shoppingcart-page/shoppingcart-page.component';

@NgModule({
  declarations: [
    IndexPageComponent,
    CategoryPageComponent,
    ShoppingcartPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IndexPageComponent,
    CategoryPageComponent,
    ShoppingcartPageComponent
  ]
})
export class PagesModule { }
