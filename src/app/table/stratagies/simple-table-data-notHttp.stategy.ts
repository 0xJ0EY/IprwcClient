import {TableDataInterface} from '../interfaces/table-data.interface';
import TableHeader from '../models/table-header.model';
import {Observable, Subscriber} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {TableRow} from '../interfaces/table-row.interface';
import {Type} from '@angular/core';

export class SimpleTableDataNotHttpStrategy implements TableDataInterface {

  constructor(
    private name: string,
    private row: Type<TableRow>,
    private headers: TableHeader[],
    private dataList: any[]
  ) {}

  getTableName(): string {
    return this.name;
  }

  getTableRow(): Type<TableRow> {
    return this.row;
  }

  getData(): Observable<any[]> {
    return Observable.create((observer: Subscriber<any>) => {
      observer.next(this.dataList);
      observer.complete();
    });
  }

  getColumns(): TableHeader[] {
    return this.headers;
  }

}
