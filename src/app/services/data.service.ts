import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Drink } from '../models/drink.model';
import { Dish } from '../models/dish.model';
import { Promotion } from '../models/promotion.model';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // fetch drinks from the api
  getDrinks(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.baseUrl}/drinks`);
  }

  // fetch dishes from the api
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.baseUrl}/dishes`);
  }

  // fetch promotions from the api
  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.baseUrl}/promotions`);
  }

  // fetch events from the api
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/events`);
  }

  // fetch image
  getImageUrl(type: string, itemId: string): string {
    return `${this.baseUrl}/images/${type}/${itemId}`;
  }
}

