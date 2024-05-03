import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Adjust path as needed

@Injectable({
  providedIn: 'root',
})
export class PromotionsService {
  private baseUrl = environment.apiUrl; // URL to your backend

  constructor(private http: HttpClient) {}

  // Method to fetch promotions from the backend
  getPromotions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/promotions`);
  }
}
