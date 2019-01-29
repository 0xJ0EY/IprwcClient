import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { TableSearchComponent } from './components/table-search/table-search.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [TableComponent, TablePaginationComponent, TableSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    TableComponent
  ],
  entryComponents: [
    TablePaginationComponent,
    TableSearchComponent
  ]
})
export class TableModule { }
