import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './pages/index/index-page.component';
import { ShoppingcartComponent } from './shared/shoppingcart/shoppingcart.component';

const routes: Routes = [{
  path: '',
  component: ShoppingcartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
