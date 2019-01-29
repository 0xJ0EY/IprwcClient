import { Component, OnInit } from '@angular/core';
import {TablePagination} from './table-pagination.interface';
import {TableComponent} from '../table/table.component';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit, TablePagination {
  private table: TableComponent;

  public information: string;
  public selected: number;
  public pages: number[] = [];

  constructor() { }

  ngOnInit() {

  }

  setup(table: TableComponent): void {
    this.table = table;
  }

  loadPage(page: number): void {
    this.table.page = page;
  }

  render(): void {
    // Clear pages
    this.pages = [];

    // Fetch data, and add them to local variable for better readability.
    const meta = this.table.pageData;
    const minPage: number = meta.minPage;
    const maxPage: number = meta.maxPage;
    const curPage: number = meta.currentPage;

    // Calculate the max side length based on paginationLength in the config
    const maxLength: number = meta.paginationLength;
    const maxSideLength: number = Math.ceil((maxLength - 1) / 2);

    // Calculate the amount of space we can use near the selected page
    const left: number = Math.min(curPage - minPage, maxSideLength);
    const right: number = Math.min(maxPage - curPage, maxSideLength);

    // Calculate the offset, so we dont go over the max or min length of the pages
    const leftOffset: number = Math.min(left + (maxSideLength - right), curPage - minPage);
    const rightOffset: number = Math.min(right + (maxSideLength - left), maxPage - curPage);

    this.selected = curPage;

    // Add every name to the page array
    for (let start = curPage - leftOffset; start <= curPage + rightOffset; start++) {
      this.pages.push(start);
    }


    const hasData = meta.items.current > 0;

    const startResults = hasData ? meta.items.offset + 1 : 0;
    const endResults = meta.items.offset + meta.items.current;

    const page = maxPage === 1 ? '1 pagina' : `${maxPage} pagina's`;

    this.information = `Resultaat ${startResults} tot ${endResults} van de ${meta.items.max} (${page})`;
  }
}
