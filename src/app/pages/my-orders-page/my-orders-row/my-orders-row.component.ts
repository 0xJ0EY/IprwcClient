import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {TableComponent} from '../../../table/components/table/table.component';
import {TableRow} from '../../../table/interfaces/table-row.interface';


/* tslint:disable */
@Component({
  selector: 'tr[app-orders-row]',
  template: `    
      <td><a [routerLink]="['/bestellingen', data.id]">{{ data.firstname }}</a></td>
      <td>{{ data.lastname }}</td>
      <td>{{ data.street }}</td>
      <td>{{ data.houseNumber }}</td>
      <td>{{ data.postalCode }}</td>
    
  `
})
/* tslint:enable */
export class MyOrdersRowComponent implements TableRow, OnInit {
  data: any;
  table: TableComponent;

  loading = true;

  @ViewChild('deleteModal') modal;

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.loading = false;
  }


}
