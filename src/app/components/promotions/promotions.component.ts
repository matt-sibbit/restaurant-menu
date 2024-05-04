import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Promotion } from '../../models/promotion.model';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.css',
})
export class PromotionsComponent implements OnInit {
  promotionItems: Promotion[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPromotions().subscribe(
      (promotions) => {
        this.promotionItems = promotions;
      },
      (error) => {
        console.error('Error fetching drink items:', error);
      }
    );
  }

  getImageUrl(type: string, itemId: string): string {
    return this.dataService.getImageUrl(type, itemId);
  }
}
