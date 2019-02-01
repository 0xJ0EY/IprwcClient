import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CategoryRowComponent } from './category-page/category-row/category-row.component';
import {TableModule} from '../../table/table.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { SubcategoryPageComponent } from './subcategory-page/subcategory-page.component';
import { SubcategoryRowComponent } from './subcategory-page/subcategory-row/subcategory-row.component';

@NgModule({
  declarations: [CategoryPageComponent, CategoryRowComponent, SubcategoryPageComponent, SubcategoryRowComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule
  ],
  entryComponents: [
    CategoryRowComponent,
    SubcategoryRowComponent
  ]
})
export class AdminModule { }
