import { Injectable } from '@angular/core';
import {Service} from './base.service';
import Order from '../models/order.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {apiRoutes} from '../../../environments/api-routes';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements Service<Order> {

  constructor(private http: HttpClient) { }

  fetch(key: any): Observable<Order> {
    return this.http.get<Order>(environment.api + apiRoutes.orders + '/' + key);
  }

  fetchAll(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.api + apiRoutes.orders);
  }

  create(obj: Order): Observable<Order> {
    return this.http.post<Order>(environment.api + apiRoutes.orders, obj);
  }

  update(obj: Order): Observable<Order> {
    throw new Error('Not implemented');
  }

  delete(key: any): Observable<Object> {
    throw new Error('Not implemented');
  }

}
