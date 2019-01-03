import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Category from '../models/category.model';
import {BehaviorSubject, Subject} from 'rxjs';


@Injectable()
export class CategoryService {

  private subject: BehaviorSubject<Category[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.loadCategories();
  }

  private fetchCategories() {
    return this.http.get<Category[]>(environment.routes.categories);
  }

  public get categories(): Subject<Category[]> {
    return this.subject;
  }

  private async loadCategories() {
    this.fetchCategories().subscribe(data => {

      data.sort((a: Category, b: Category) => {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();

        return +x - +y;
      });

      this.subject.next(data);
    });
  }

}
