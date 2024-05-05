import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Drink } from '../models/drink.model';
import { Dish } from '../models/dish.model';
import { Promotion } from '../models/promotion.model';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy {
  private baseUrl = 'http://localhost:3000/api';

    // ReplaySubjects to cache latest data
    private drinksSubject = new ReplaySubject<Drink[]>(1);
    private dishesSubject = new ReplaySubject<Dish[]>(1);
    private promotionsSubject = new ReplaySubject<Promotion[]>(1);
    private eventsSubject = new ReplaySubject<Event[]>(1);
  
    // Subscriptions to fetch the data
    private drinksSubscription: Subscription | null = null;
    private dishesSubscription: Subscription | null = null;
    private promotionsSubscription: Subscription | null = null;
    private eventsSubscription: Subscription | null = null;
  

  constructor(private http: HttpClient) {
      // Fetch data on initialization
      this.fetchDrinks();
      this.fetchDishes();
      this.fetchPromotions();
      this.fetchEvents();
   }

  // Fetch drinks and push to subject
  private fetchDrinks(): void {
    this.drinksSubscription = this.http.get<Drink[]>(`${this.baseUrl}/drinks`).subscribe(
      data => this.drinksSubject.next(data)
    );
  }

  // Fetch dishes and push to subject
  private fetchDishes(): void {
    this.dishesSubscription = this.http.get<Dish[]>(`${this.baseUrl}/dishes`).subscribe(
      data => this.dishesSubject.next(data)
    );
  }

  // Fetch promotions and push to subject
  private fetchPromotions(): void {
    this.promotionsSubscription = this.http.get<Promotion[]>(`${this.baseUrl}/promotions`).subscribe(
      data => this.promotionsSubject.next(data)
    );
  }

  // Fetch events and push to subject
  private fetchEvents(): void {
    this.eventsSubscription = this.http.get<Event[]>(`${this.baseUrl}/events`).subscribe(
      data => this.eventsSubject.next(data)
    );
  }

  // public getters
  getDrinks(): Observable<Drink[]> {
    return this.drinksSubject.asObservable();
  }

  getDishes(): Observable<Dish[]> {
    return this.dishesSubject.asObservable();
  }

  getPromotions(): Observable<Promotion[]> {
    return this.promotionsSubject.asObservable();
  }

  getEvents(): Observable<Event[]> {
    return this.eventsSubject.asObservable();
  }

  // Fetch image
  getImageUrl(type: string, itemId: string): string {
    return `${this.baseUrl}/images/${type}/${itemId}`;
  }

  ngOnDestroy(): void {
    // unsubbed and reported.
    this.drinksSubscription?.unsubscribe();
    this.dishesSubscription?.unsubscribe();
    this.promotionsSubscription?.unsubscribe();
    this.eventsSubscription?.unsubscribe();
  }
}

