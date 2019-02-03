import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductOverviewPageComponent} from './product-overview-page/product-overview-page.component';
import {ProductAddPageComponent} from './product-add-page/product-add-page.component';
import {ProductEditPageComponent} from './product-edit-page/product-edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductOverviewPageComponent
  },
  {
    path: 'toevoegen',
    component: ProductAddPageComponent
  },
  {
    path: 'aanpassen/:id',
    component: ProductEditPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
