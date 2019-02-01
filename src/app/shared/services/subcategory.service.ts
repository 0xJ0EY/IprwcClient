import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import Subcategory from '../models/subcategory.model';
import {Observable} from 'rxjs';
import {Service} from './base.service';
import {CategoryService} from './category.service';
import {tap} from 'rxjs/operators';
import {apiRoutes} from '../../../environments/api-routes';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService implements Service<Subcategory> {

  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) { }

  fetchAll(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(environment.api + apiRoutes.subcategories);
  }

  fetch(key: any): Observable<Subcategory> {
    return this.http.get<Subcategory>(environment.api + apiRoutes.subcategories + '/' + key);
  }

  create(obj: Subcategory): Observable<Subcategory> {
    return this.http.post<Subcategory>(environment.api + apiRoutes.subcategories, obj).pipe(tap(() => {
      this.categoryService.updateCategories();
    }));
  }

  update(obj: Subcategory): Observable<Subcategory> {
    return this.http.put<Subcategory>(environment.api + apiRoutes.subcategories, obj).pipe(tap(() => {
      this.categoryService.updateCategories();
    }));
  }

  delete(key: any): Observable<Object> {
    return this.http.delete<Subcategory>(environment.api + apiRoutes.subcategories).pipe(tap(() => {
      this.categoryService.updateCategories();
    }));
  }

}
