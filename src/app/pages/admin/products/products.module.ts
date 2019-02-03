import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductOverviewPageComponent } from './product-overview-page/product-overview-page.component';
import {TableModule} from '../../../table/table.module';
import {ProductOverviewRowComponent} from './product-overview-page/product-overview-row/product-overview-row.component';
import { ProductEditPageComponent } from './product-edit-page/product-edit-page.component';
import { ProductAddPageComponent } from './product-add-page/product-add-page.component';
import {SharedModule} from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductImagesUploadComponent } from './product-images-upload/product-images-upload.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProductOverviewPageComponent,
    ProductOverviewRowComponent,
    ProductEditPageComponent,
    ProductAddPageComponent,
    ProductImagesUploadComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    SharedModule,
    ProductsRoutingModule,
    FormsModule,
    NgbModalModule,
  ],
  entryComponents: [
    ProductOverviewRowComponent
  ]
})
export class ProductsModule { }
