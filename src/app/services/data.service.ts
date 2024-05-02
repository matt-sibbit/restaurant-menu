import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // fetch menu items from the backend
  getMenuItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/menu-items`);
  }

  // add a new menu item
  addMenuItem(item: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/menu-items`, item);
  }
}

