import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductOverviewPageComponent } from './product-overview-page/product-overview-page.component';
import {TableModule} from '../../../table/table.module';
import {ProductOverviewRowComponent} from './product-overview-page/product-overview-row/product-overview-row.component';
import { ProductEditPageComponent } from './product-edit-page/product-edit-page.component';
import { ProductAddPageComponent } from './product-add-page/product-add-page.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProductOverviewPageComponent,
    ProductOverviewRowComponent,
    ProductEditPageComponent,
    ProductAddPageComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    SharedModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ProductOverviewRowComponent
  ]
})
export class ProductsModule { }
