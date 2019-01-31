import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Category from '../models/category.model';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Service} from './base.service';
import {tap} from 'rxjs/operators';


@Injectable()
export class CategoryService implements Service<Category> {

  private subject: BehaviorSubject<Category[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.updateCategories();
  }

  public get categories(): Subject<Category[]> {
    return this.subject;
  }

  fetchAll(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.routes.categories);
  }

  fetch(key: any): Observable<Category> {
    return this.http.get<Category>(environment.routes.categories + '/' + key);
  }

  create(obj: Category): Observable<Category> {
    return this.http.post<Category>(environment.routes.categories, obj).pipe(tap(() => {
      this.updateCategories();
    }));
  }

  update(obj: Category): Observable<Category> {
    return this.http.put<Category>(environment.routes.categories, obj).pipe(tap(() => {
      this.updateCategories();
    }));
  }

  delete(key: any): Observable<Object> {
    return this.http.delete(environment.routes.categories + '/' + key).pipe(tap(() => {
      this.updateCategories();
    }));
  }

  private updateCategories() {
    this.fetchAll().subscribe(data => {

      data.sort((a: Category, b: Category) => {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();

        return +x - +y;
      });

      this.subject.next(data);
    });
  }

}
