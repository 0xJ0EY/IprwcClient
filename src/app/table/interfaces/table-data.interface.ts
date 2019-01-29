import {Observable} from 'rxjs';
import TableHeader from '../models/table-header.model';
import {Type} from '@angular/core';
import {TableRow} from './table-row.interface';

export interface TableDataInterface {

  getTableName(): string;

  getTableRow(): Type<TableRow>;

  getData(): Observable<any>;

  getColumns(): TableHeader[];

}
