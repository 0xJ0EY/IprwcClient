import {
  Component,
  ComponentFactoryResolver,
  ComponentRef, ElementRef,
  Input, OnChanges,
  OnDestroy,
  OnInit, SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import TableData from '../../models/table-item.model';
import TableHeader from '../../models/table-header.model';
import {TableRow} from '../../interfaces/table-row.interface';
import TableSettings from '../../models/table-settings.model';
import {TablePagination} from '../table-pagination/table-pagination.interface';
import {TableSearch} from '../table-search/table-search.interface';
import {TableDataInterface} from '../../interfaces/table-data.interface';
import {delay} from 'rxjs/internal/operators';
import {TableButton} from '../../models/table-button.model';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public header: TableHeader[] = [];
  @Input() public data: TableDataInterface;
  @Input() public buttons: TableButton[] = [];
  @Input() public tableButtons: TableButton[] = [];
  @Input() public settings: TableSettings = new TableSettings();
  @Input() public itemsPerPage = 15;

  private loadingData = true;
  private renderingHtml = false;

  public title = '';

  private internalData: TableData = null;
  private filteredData: TableData = null;

  private currentPage = 1;
  private searchQuery = '';

  /**
   * Amount of results after the search filter has been executed
   */
  private results = 0;
  private orderBy: TableHeader = null;

  @ViewChild('appTableSearch', {read: ViewContainerRef}) public searchView: ViewContainerRef;
  @ViewChild('appTableResults', {read: ViewContainerRef}) public resultView: ViewContainerRef;
  @ViewChild('appTablePagination', {read: ViewContainerRef}) public paginationView: ViewContainerRef;

  private rows: ComponentRef<TableRow>[] = [];

  private searchRef: ComponentRef<TableSearch>;
  private paginationRef: ComponentRef<TablePagination>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    this.loadTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* Only allow changes when the loading is done */
    if (this.loading === true) { return; }
    this.loadTable();
  }


  ngOnDestroy(): void {
    this.rows = [];
  }

  ////
  // Data accessors
  ////
  get isDevelopment(): boolean {
    return !environment.production;
  }

  get pageData() {
    const maxPage = Math.ceil(this.results / this.itemsPerPage) || 1;
    const currentItems = Math.min(this.results - ((this.currentPage - 1) * this.itemsPerPage), this.itemsPerPage);

    return {
      'minPage': 1,
      'maxPage': maxPage,
      'currentPage': this.currentPage,
      'itemsPerPage': this.itemsPerPage,
      'paginationLength': this.settings.paginationLength,
      'hasData': this.filteredData && this.filteredData.data.length > 0,
      'items': {
        'current': currentItems,
        'offset': (this.currentPage - 1) * this.itemsPerPage,
        'max': this.results
      }
    };
  }

  set page(page: number) {
    const limits = this.pageData;

    page = Math.round(page);

    if (!(page >= limits.minPage && page <= limits.maxPage)) {
      return;
    }

    this.currentPage = page;
    this.update();
  }

  set search(query: string) {
    this.searchQuery = query;

    // Set page to the first result page
    this.page = 1;

    this.update();
  }

  get loading() {
    return this.loadingData || this.renderingHtml;
  }

  ////
  // Data filters
  ////
  private loadTable() {
    this.loadingData = true;
    this.fetchData();
    this.update();

    if (this.settings.addEmptyRowBtn) {
      this.tableButtons.push(new TableButton('Toevoegen', '', () => { this.addTemporaryEmptyRow(); }));
    }
  }

  private fetchData() {
    if (this.data == null) {
      throw new Error('No data object coupled');
    }

    // Set fetched filters
    this.header = this.data.getColumns();
    this.title = this.data.getTableName();

    // Fetch the data and update the table again
    this.data.getData().pipe(delay(0)).subscribe(response => {

      this.internalData = new TableData(
        this.data.getTableRow(),
        response
      );

      this.update();
      this.loadingData = false;
    });

    // Render before we got the data ready
    this.update();
  }

  private update() {

    if (this.internalData !== null) {
      // Make a deep copy of the loaded data
      const deepCopy = JSON.parse(JSON.stringify(this.internalData));

      // Filter the data
      this.filteredData = this.filterOrderBy(this.filterPagination(this.filterSearch(deepCopy)));
    }

    // Re-render with the new data
    this.render();
  }

  private filterOrderBy(tableData: TableData): TableData {

    if (this.orderBy === null) {
      return tableData;
    }

    return tableData;
  }

  private filterPagination(tableData: TableData): TableData {
    const data = tableData.data;

    const page = this.currentPage - 1;
    const begin = page * this.itemsPerPage;

    tableData.data = data.splice(begin, this.itemsPerPage);

    return tableData;
  }

  /**
   * Filter the search data
   * This filter is used to filter the data based on all the content of the model
   */
  private filterSearch(tableData: TableData): TableData {
    if (this.searchQuery.length === 0) {
      this.results = tableData.data.length;
      return tableData;
    }

    const filteredData: any[] = [];
    const searchableHeaders = this.header.filter(x => x.searchable === true);

    for (const entry of this.internalData.data) {
      const results = [];

      // Only filter the headers with the searchable boolean enabled
      for (const header of searchableHeaders) {
        const value = JSON.stringify(entry[header.title]);
        const expr = new RegExp(this.searchQuery, 'i');

        results.push(value.search(expr) >= 0);
      }

      // Only add results where there is one or more instances that match the searchQuery
      if (results.filter(x => x === true).length > 0) {
        filteredData.push(entry);
      }
    }

    tableData.data = filteredData;
    this.results = filteredData.length;
    return tableData;
  }

  ////
  // Render methods
  ////
  private render() {
    this.renderingHtml = true;
    this.renderSearch();
    this.renderTable();
    this.renderPagination();

    // Give time for subcomponents to render
    setTimeout(() => this.renderingHtml = false, 100);
  }

  public addTemporaryEmptyRow() {
    const data: TableData = this.filteredData;
    data.data.push({ 'editable': true, 'new': true, 'dirty': true, 'deleted': false });
    this.filteredData = data;

    // Rerender table
    this.render();
  }

  /**
   * Render the search component.
   * This component can be defined in the tableSettings model, that can be passed in with the [settings] data binding.
   */
  private renderSearch(): void {
    if (this.settings.search == null) {
      return;
    }

    // If the search view is already rendered, do not render it again
    if (this.searchView.length >= 1) {
      return;
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(this.settings.search);

    this.searchView.clear();

    this.searchRef = this.searchView.createComponent(factory);
    this.searchRef.instance.setup(this);
  }

  /**
   * Render the row components.
   * The row components are defined within the TableData object.
   */
  private renderTable(): void {
    if (this.internalData === null) { return; }

    const factory = this.componentFactoryResolver.resolveComponentFactory(this.internalData.component);

    this.rows = [];
    this.resultView.clear();

    for (const item of this.filteredData.data) {
      const component = this.resultView.createComponent(factory);
      component.instance.table = this;
      component.instance.data = item;

      this.rows.push(component);
    }
  }

  /**
   * Render pagination component.
   * This component can be defined in the tableSettings model, that can be passed in with the [settings] data binding.
   */
  private renderPagination(): void {
    if (this.settings.pagination == null) {
      return;
    }

    // If the pagination view is already rendered, re-use the component
    if (this.paginationView.length >= 1) {
      this.paginationRef.instance.render();
      return;
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(this.settings.pagination);

    this.paginationView.clear();

    this.paginationRef = this.paginationView.createComponent(factory);
    this.paginationRef.instance.setup(this);
    this.paginationRef.instance.render();
  }

}
