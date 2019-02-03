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
import { MyOrdersPageComponent } from './my-orders-page/my-orders-page.component';
import {TableModule} from '../table/table.module';
import {MyOrdersRowComponent} from './my-orders-page/my-orders-row/my-orders-row.component';
import { MyOrderDetailPageComponent } from './my-orders-page/my-order-detail-page/my-order-detail-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductImageComponent } from './product-detail-page/product-image/product-image.component';

@NgModule({
  declarations: [
    IndexPageComponent,
    ShoppingcartPageComponent,
    LoginPageComponent,
    OrderPageComponent,
    MyOrdersPageComponent,
    MyOrdersRowComponent,
    MyOrderDetailPageComponent,
    ProductDetailPageComponent,
    ProductImageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CategoryPageModule,
    TableModule,
    RouterModule
  ],
  exports: [
    IndexPageComponent,
    ShoppingcartPageComponent
  ],
  entryComponents: [
    MyOrdersRowComponent
  ]
})
export class PagesModule { }
