import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ShoppingcartPageComponent } from './pages/shoppingcart-page/shoppingcart-page.component';
import {CategoryPageComponent} from './pages/category-page/category-page.component';
import {AuthenticationGuard} from './shared/guards/authentication.guard';
import {AdminAuthenticationGuard} from './shared/guards/admin-authentication.guard';
import {OrderPageComponent} from './pages/order-page/order-page.component';
import {MyOrdersPageComponent} from './pages/my-orders-page/my-orders-page.component';
import {MyOrderDetailPageComponent} from './pages/my-orders-page/my-order-detail-page/my-order-detail-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {ProductDetailPageComponent} from './pages/product-detail-page/product-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'categorie/:subcategory',
    component: CategoryPageComponent
  },
  {
    path: 'product/:product',
    component: ProductDetailPageComponent
  },
  {
    path: 'winkelwagen',
    component: ShoppingcartPageComponent
  },
  {
    path: 'bestellen',
    component: OrderPageComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'bestellingen',
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        component: MyOrdersPageComponent
      },
      {
        path: ':id',
        component: MyOrderDetailPageComponent,
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: './pages/admin/admin.module#AdminModule',
    canActivate: [AdminAuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
