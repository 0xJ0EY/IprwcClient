import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryPageComponent} from './category-page/category-page.component';

const routes: Routes = [
  {
    path: 'categorie',
    component: CategoryPageComponent
  },
  {
    path: 'subcategorie',
    component: CategoryPageComponent
  },
  {
    path: 'producten',
    component: CategoryPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
