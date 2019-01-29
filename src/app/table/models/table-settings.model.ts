

import {TablePagination} from '../components/table-pagination/table-pagination.interface';
import {Type} from '@angular/core';
import {TablePaginationComponent} from '../components/table-pagination/table-pagination.component';
import {TableSearch} from '../components/table-search/table-search.interface';
import {TableSearchComponent} from '../components/table-search/table-search.component';

export default class TableSettings {
  search: Type<TableSearch> = TableSearchComponent;
  pagination: Type<TablePagination> = TablePaginationComponent;
  paginationLength = 5;
  addEmptyRowBtn = false;
}
