import { Component, OnInit } from '@angular/core';
import {TableSearch} from './table-search.interface';
import {TableComponent} from '../table/table.component';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.scss']
})
export class TableSearchComponent implements OnInit, TableSearch {

  private table: TableComponent;

  constructor() { }

  public onSearch(query: string) {
    this.table.search = query;
  }

  ngOnInit() {
  }

  setup(table: TableComponent): void {
    this.table = table;
  }
}
