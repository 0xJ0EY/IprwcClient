import {Component, OnInit, ViewChild} from '@angular/core';
import {TableRow} from '../../../../table/interfaces/table-row.interface';
import {TableComponent} from '../../../../table/components/table/table.component';

/* tslint:disable */
@Component({
  selector: 'tr[app-users-row]',
  template: `    
      <td>{{ data.username }}</td>
      <td>{{ data.email }}</td>
  `
})
/* tslint:enable */
export class UsersRowComponent implements TableRow, OnInit {
  data: any;
  table: TableComponent;

  loading = true;

  constructor() { }

  ngOnInit() {
    this.loading = false;
  }


}
