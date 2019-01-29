import {TableComponent} from '../table/table.component';

export interface TablePagination {

  setup(table: TableComponent): void;

  render();

}
