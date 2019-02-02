import {Component, OnInit, ViewChild} from '@angular/core';
import {TableRow} from '../../../../../table/interfaces/table-row.interface';
import {TableComponent} from '../../../../../table/components/table/table.component';

/* tslint:disable */
@Component({
  selector: 'tr[app-product-overview-row]',
  template: `
    <td>{{ data.subcategory?.name }}</td>
    <td>{{ data.brand?.name }}</td>
    <td>{{ data.name }}</td>
    <td style="width: 20px" class="align-middle"><a class="material-icons">edit</a></td>
    <td style="width: 20px" class="align-middle"><a class="material-icons">delete</a></td>
  `
})
/* tslint:enable */
export class ProductOverviewRowComponent implements TableRow {
  data: any;
  table: TableComponent;

  constructor() { }

}
