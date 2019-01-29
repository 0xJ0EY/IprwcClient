import {TableDataInterface} from '../interfaces/table-data.interface';
import TableHeader from '../models/table-header.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {TableRow} from '../interfaces/table-row.interface';
import {Type} from '@angular/core';

export class SimpleTableDataStrategy implements TableDataInterface {

  constructor(
    private path: string,
    private name: string,
    private row: Type<TableRow>,
    private headers: TableHeader[],
    private http: HttpClient
  ) {}

  getTableName(): string {
    return this.name;
  }

  getTableRow(): Type<TableRow> {
    return this.row;
  }

  getData(): Observable<Object> {
    return this.http.get(environment.api + this.path);
  }

  getColumns(): TableHeader[] {
    return this.headers;
  }

}
