import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryPageComponent} from './category-page/category-page.component';
import {SubcategoryPageComponent} from './subcategory-page/subcategory-page.component';
import {BrandPageComponent} from './brand-page/brand-page.component';

const routes: Routes = [
  {
    path: 'categorie',
    component: CategoryPageComponent
  },
  {
    path: 'subcategorie',
    component: SubcategoryPageComponent
  },
  {
    path: 'merken',
    component: BrandPageComponent
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
