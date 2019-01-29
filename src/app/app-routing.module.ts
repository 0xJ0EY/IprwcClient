import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ShoppingcartPageComponent } from './pages/shoppingcart-page/shoppingcart-page.component';
import {CategoryPageComponent} from './pages/category-page/category-page.component';
import {AuthenticationGuard} from './shared/guards/authentication.guard';
import {AdminAuthenticationGuard} from './shared/guards/admin-authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent,
  },
  {
    path: 'login',
    component: IndexPageComponent,
  },
  {
    path: 'categorie/:subcategory',
    component: CategoryPageComponent
  },
  {
    path: 'winkelwagen',
    component: ShoppingcartPageComponent
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
