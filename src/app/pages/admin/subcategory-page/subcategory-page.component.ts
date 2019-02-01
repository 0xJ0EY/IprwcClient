import { Component, OnInit } from '@angular/core';
import {TableDataInterface} from '../../../table/interfaces/table-data.interface';
import TableSettings from '../../../table/models/table-settings.model';
import {HttpClient} from '@angular/common/http';
import {SimpleTableDataStrategy} from '../../../table/stratagies/simple-table-data.strategy';
import TableHeader from '../../../table/models/table-header.model';
import {SubcategoryRowComponent} from './subcategory-row/subcategory-row.component';

@Component({
  selector: 'app-subcategory-page',
  templateUrl: './subcategory-page.component.html',
  styleUrls: ['./subcategory-page.component.scss']
})
export class SubcategoryPageComponent implements OnInit {

  public data: TableDataInterface;
  public settings: TableSettings;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.settings = new TableSettings();
    this.settings.addEmptyRowBtn = true;

    this.data = new SimpleTableDataStrategy(
      'subcategory',
      'Subcategorieën',
      SubcategoryRowComponent,
      [
        new TableHeader('Categorie', 'name', false, false),
        new TableHeader('Naam', 'name', false, false),
        new TableHeader('', '', false, false),
        new TableHeader('', '', false, false)
      ],
      this.http
    );
  }

}
