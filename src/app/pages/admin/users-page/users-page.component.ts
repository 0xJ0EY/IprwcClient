import { Component, OnInit } from '@angular/core';
import {TableDataInterface} from '../../../table/interfaces/table-data.interface';
import {HttpClient} from '@angular/common/http';
import {SimpleTableDataStrategy} from '../../../table/stratagies/simple-table-data.strategy';
import TableHeader from '../../../table/models/table-header.model';
import {UsersRowComponent} from './users-page-row/users-row.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  public data: TableDataInterface;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data = new SimpleTableDataStrategy(
      'users',
      'Gebruikers',
      UsersRowComponent,
      [
        new TableHeader('Gebruikersnaam', 'username', false, true),
        new TableHeader('E-mail', 'email', false, true)
      ],
      this.http
    );
  }
}
