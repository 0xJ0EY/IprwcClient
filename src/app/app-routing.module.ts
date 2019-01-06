import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ShoppingcartPageComponent } from './pages/shoppingcart-page/shoppingcart-page.component';
import {CategoryPageComponent} from './pages/category-page/category-page.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent,
  },
  {
    path: 'categorie/:subcategory',
    component: CategoryPageComponent
  },
  {
    path: 'winkelwagen',
    component: ShoppingcartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
