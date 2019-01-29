import { Component, OnInit } from '@angular/core';
import {TableRow} from '../../../../table/interfaces/table-row.interface';
import {TableComponent} from '../../../../table/components/table/table.component';

/* tslint:disable */
@Component({
  selector: 'tr[app-category-row]',
  template: `<td>{{ data.name }}</td>`,
})
/* tslint:enable */
export class CategoryRowComponent implements TableRow, OnInit {
  data: any;
  table: TableComponent;

  constructor() { }

  ngOnInit() {
  }

}
