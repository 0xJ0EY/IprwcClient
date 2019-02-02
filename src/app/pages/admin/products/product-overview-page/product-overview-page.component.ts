import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import TableHeader from '../../../../table/models/table-header.model';
import {TableDataInterface} from '../../../../table/interfaces/table-data.interface';
import {SimpleTableDataStrategy} from '../../../../table/stratagies/simple-table-data.strategy';
import {TableButton} from '../../../../table/models/table-button.model';
import {ProductOverviewRowComponent} from './product-overview-row/product-overview-row.component';

@Component({
  selector: 'app-product-overview-page',
  templateUrl: './product-overview-page.component.html',
  styleUrls: ['./product-overview-page.component.scss']
})
export class ProductOverviewPageComponent implements OnInit {

  public data: TableDataInterface;
  public buttons: TableButton[] = [
    new TableButton('Toevoegen', '/admin/producten/toevoegen')
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.data = new SimpleTableDataStrategy(
      'products',
      'Producten',
      ProductOverviewRowComponent,
      [
        new TableHeader('Subcategorie', 'subcategory', false, true),
        new TableHeader('Merk', 'brand', false, true),
        new TableHeader('Naam', 'name', false, true),
        new TableHeader('', '', false, false),
        new TableHeader('', '', false, false)
      ],
      this.http
    );
  }

}
