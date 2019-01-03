import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Category from '../models/category.model';


@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  public fetchCategories() {
    return this.http.get<Category[]>(environment.routes.categories);
  }

}
