import { Injectable } from '@angular/core';
import {Service} from './base.service';
import Brand from '../models/brand.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {apiRoutes} from '../../../environments/api-routes';

@Injectable({
  providedIn: 'root'
})
export class BrandService implements Service<Brand> {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(environment.api + apiRoutes.brands);
  }

  fetch(key: any): Observable<Brand> {
    return this.http.get<Brand>(environment.api + apiRoutes.brands + '/' + key);
  }

  create(obj: Brand): Observable<Brand> {
    return this.http.post<Brand>(environment.api + apiRoutes.brands, obj);
  }

  update(obj: Brand): Observable<Brand> {
    return this.http.put<Brand>(environment.api + apiRoutes.brands, obj);
  }

  delete(key: any): Observable<Object> {
    return this.http.delete<Object>(environment.api + apiRoutes.brands + '/' + key);
  }

}
