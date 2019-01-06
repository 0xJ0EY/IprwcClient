import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import Subcategory from '../models/subcategory.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http: HttpClient) { }

  public fetchSubcategory(subcategory: string): Observable<Subcategory> {
    let route = environment.routes.subcategories;

    route = route.replace(':subcategory', subcategory);

    return this.http.get<Subcategory>(route);
  }

}
