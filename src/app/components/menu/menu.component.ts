import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Drink } from '../../models/drink.model';
import { Dish } from '../../models/dish.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  drinkItems: Drink[] = [];
  dishItems: Dish[] = [];

  private drinksSubscription: Subscription | null = null;
  private dishesSubscription: Subscription | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.drinksSubscription = this.dataService.getDrinks().subscribe(
      drinks => {
        this.drinkItems = drinks;
      },
      error => {
        console.error('Error fetching drink items:', error);
      }
    );

    this.dishesSubscription = this.dataService.getDishes().subscribe(
      dishes => {
        this.dishItems = dishes;
      },
      error => {
        console.error('Error fetching dish items:', error);
      }
    );
  }

  ngOnDestroy() {
    if (this.drinksSubscription) {
      this.drinksSubscription.unsubscribe();
    }
    if (this.dishesSubscription) {
      this.dishesSubscription.unsubscribe();
    }
  }

  getImageUrl(type: string, itemId: string): string {
    return this.dataService.getImageUrl(type, itemId);
  }
}
