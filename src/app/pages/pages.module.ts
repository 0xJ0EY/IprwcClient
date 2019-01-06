import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page/index-page.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingcartPageComponent } from './shoppingcart-page/shoppingcart-page.component';
import { CategoryPageModule } from './category-page/category-page.module';

@NgModule({
  declarations: [
    IndexPageComponent,
    ShoppingcartPageComponent
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
