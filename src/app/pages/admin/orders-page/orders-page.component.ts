import { Component, OnInit } from '@angular/core';
import {TableDataInterface} from '../../../table/interfaces/table-data.interface';
import {HttpClient} from '@angular/common/http';
import {SimpleTableDataStrategy} from '../../../table/stratagies/simple-table-data.strategy';
import {MyOrdersRowComponent} from '../../my-orders-page/my-orders-row/my-orders-row.component';
import TableHeader from '../../../table/models/table-header.model';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  public data: TableDataInterface;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data = new SimpleTableDataStrategy(
      'orders/all',
      'Bestellingen',
      MyOrdersRowComponent,
      [
        new TableHeader('Voornaam', 'firstname', false, true),
        new TableHeader('Achternaam', 'lastname', false, true),
        new TableHeader('Straat', 'street', false, true),
        new TableHeader('Huisnummer', 'houseNumber', false, true),
        new TableHeader('Postcode', 'postalCode', false, true),
        new TableHeader('', '', false, false),
        new TableHeader('', '', false, false)
      ],
      this.http
    );
  }

}
