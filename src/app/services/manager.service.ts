import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Manager } from '../interfaces/manager';

@Injectable()
export class ManagerService {

  constructor(public http: HttpClient) { }

  private url = 'http://localhost:3000/api/managers';

  private options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getManagers(): Observable<Manager[]> {

    return this.http.get<Manager[]>(this.url);
  }

  getManager(id): Observable<Manager> {
    return this.http.get<Manager>(`${this.url}/${id}`);
  }

  updateManager(manager: Manager): Observable<any> {
    return this.http.put(this.url, manager, this.options);
  }

  deleteManager(id: String): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  addManager(manager: Manager): Observable<any> {
    return this.http.post(this.url, manager, this.options);
  }
}
