import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryPageComponent} from './category-page.component';
import {SubcategoryService} from '../../shared/services/subcategory.service';
import {SharedModule} from '../../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CategoryPageComponent,
    ProductComponent,
    ProductGridComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    CategoryPageComponent
  ],
  providers: []
})
export class CategoryPageModule { }
