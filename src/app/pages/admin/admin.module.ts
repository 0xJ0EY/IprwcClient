import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CategoryRowComponent } from './category-page/category-row/category-row.component';
import {TableModule} from '../../table/table.module';

@NgModule({
  declarations: [CategoryPageComponent, CategoryRowComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule
  ],
  entryComponents: [
    CategoryRowComponent
  ]
})
export class AdminModule { }
