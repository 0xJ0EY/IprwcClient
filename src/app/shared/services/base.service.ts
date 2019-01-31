import {Observable} from 'rxjs';

export interface Service<T> {

  fetchAll(): Observable<T[]>;

  fetch(key: any): Observable<T>;

  create(obj: T): Observable<T>;

  update(obj: T): Observable<T>;

  delete(key: any): Observable<Object>;

}
