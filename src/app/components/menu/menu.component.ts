import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Drink } from '../../models/drink.model';
import { Dish } from '../../models/dish.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  drinkItems: Drink[] = [];
  dishItems: Dish[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDrinks().subscribe(drinks => {
      this.drinkItems = drinks;
    }, error => {
      console.error('Error fetching drink items:', error);
    });

    this.dataService.getDishes().subscribe(dishes => {
      this.dishItems = dishes;
    }, error => {
      console.error('Error fetching dish items:', error);
    });
  }

  getImageUrl(type: string, itemId: string): string {
    return this.dataService.getImageUrl(type, itemId);
  }
}
