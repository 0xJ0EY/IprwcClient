import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductOverviewPageComponent} from './product-overview-page/product-overview-page.component';
import {ProductAddPageComponent} from './product-add-page/product-add-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductOverviewPageComponent
  },
  {
    path: 'toevoegen',
    component: ProductAddPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
