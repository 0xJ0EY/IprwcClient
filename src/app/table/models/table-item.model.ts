import { Type } from '@angular/core';
import { TableRow } from '../interfaces/table-row.interface';

export default class TableData {
  constructor(
    public component: Type<TableRow>,
    public data: any[]
  ) {}
}
