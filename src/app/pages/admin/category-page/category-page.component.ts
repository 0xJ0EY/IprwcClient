import { Component, OnInit } from '@angular/core';
import {TableDataInterface} from '../../../table/interfaces/table-data.interface';
import {SimpleTableDataStrategy} from '../../../table/stratagies/simple-table-data.strategy';
import {CategoryRowComponent} from './category-row/category-row.component';
import {HttpClient} from '@angular/common/http';
import TableHeader from '../../../table/models/table-header.model';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  public data: TableDataInterface;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.data = new SimpleTableDataStrategy(
      'category',
      'Categorieën',
      CategoryRowComponent,
      [
        new TableHeader('Naam', 'name', false, false)
      ],
      this.http
    );

  }

}
