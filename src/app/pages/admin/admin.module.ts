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
import { BrandPageComponent } from './brand-page/brand-page.component';
import { BrandRowComponent } from './brand-page/brand-row/brand-row.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import {SharedModule} from '../../shared/shared.module';
import {UsersRowComponent} from './users-page/users-page-row/users-row.component';

@NgModule({
  declarations: [
    CategoryPageComponent,
    CategoryRowComponent,
    SubcategoryPageComponent,
    SubcategoryRowComponent,
    BrandPageComponent,
    BrandRowComponent,
    OrdersPageComponent,
    UsersPageComponent,
    UsersRowComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    SharedModule
  ],
  entryComponents: [
    CategoryRowComponent,
    SubcategoryRowComponent,
    BrandRowComponent,
    UsersRowComponent
  ]
})
export class AdminModule { }
