import { Component, OnInit } from '@angular/core';
import {SimpleTableDataStrategy} from '../../table/stratagies/simple-table-data.strategy';
import TableHeader from '../../table/models/table-header.model';
import {TableDataInterface} from '../../table/interfaces/table-data.interface';
import {HttpClient} from '@angular/common/http';
import {MyOrdersRowComponent} from './my-orders-row/my-orders-row.component';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders-page.component.html',
  styleUrls: ['./my-orders-page.component.scss']
})
export class MyOrdersPageComponent implements OnInit {

  public data: TableDataInterface;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data = new SimpleTableDataStrategy(
      'orders',
      'Mijn bestellingen',
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
