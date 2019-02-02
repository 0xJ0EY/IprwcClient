import { Injectable } from '@angular/core';
import {Service} from './base.service';
import {Product} from '../models/product.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {apiRoutes} from '../../../environments/api-routes';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements Service<Product> {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.api + apiRoutes.products);
  }

  fetch(key: any): Observable<Product> {
    return this.http.get<Product>(environment.api + apiRoutes.products + '/' + key);
  }

  create(obj: Product): Observable<Product> {
    return this.http.post<Product>(environment.api + apiRoutes.products, obj);
  }

  update(obj: Product): Observable<Product> {
    return this.http.put<Product>(environment.api + apiRoutes.products, obj);
  }

  delete(key: any): Observable<Object> {
    return this.http.delete<Object>(environment.api + apiRoutes.products + '/' + key);
  }

}
