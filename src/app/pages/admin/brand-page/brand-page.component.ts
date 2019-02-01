import { Component, OnInit } from '@angular/core';
import {TableDataInterface} from '../../../table/interfaces/table-data.interface';
import TableSettings from '../../../table/models/table-settings.model';
import {HttpClient} from '@angular/common/http';
import {SimpleTableDataStrategy} from '../../../table/stratagies/simple-table-data.strategy';
import TableHeader from '../../../table/models/table-header.model';
import {BrandRowComponent} from './brand-row/brand-row.component';

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.scss']
})
export class BrandPageComponent implements OnInit {

  public data: TableDataInterface;
  public settings: TableSettings;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.settings = new TableSettings();
    this.settings.addEmptyRowBtn = true;

    this.data = new SimpleTableDataStrategy(
      'brands',
      'Merken',
      BrandRowComponent,
      [
        new TableHeader('Naam', 'name', false, false),
        new TableHeader('', '', false, false),
        new TableHeader('', '', false, false)
      ],
      this.http
    );
  }

}
