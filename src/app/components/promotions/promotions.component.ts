import { Component } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.css',
})
export class PromotionsComponent {
  promotions = [
    {
      title: 'Summer Special',
      description: 'Get 20% off on all desserts!',
      image: 'assets/images/promo1.jpg',
      price: '$5',
      start: 'June 1, 2024',
      end: 'August 31, 2024',
    },
    {
      title: 'Happy Hour',
      description: 'Buy one get one free on selected drinks!',
      image: 'assets/images/promo2.jpg',
      price: '$8',
      start: 'June 1, 2024',
      end: 'June 30, 2024',
    },
    {
      title: 'Weekend Brunch Bonanza',
      description: 'Enjoy a 25% discount on our brunch menu every weekend!',
      image: 'assets/images/promo3.jpg',
      price: 'Starting at $10',
      start: 'July 1, 2024',
      end: 'Indefinite',
    },
    {
      title: 'Family Feast',
      description:
        'Order our Family Meal Deal and receive free appetizers for the table.',
      image: 'assets/images/promo4.jpg',
      price: '$30',
      start: 'June 15, 2024',
      end: 'July 15, 2024',
    },
    {
      title: 'Taste of the Season',
      description:
        'Try our new dishes made with fresh, seasonal ingredients available at a 20% discount.',
      image: 'assets/images/promo5.jpg',
      price: 'Varies',
      start: 'September 1, 2024',
      end: 'November 30, 2024',
    },
    {
      title: 'Midnight Munchies',
      description:
        'From 10 PM to midnight, enjoy 50% off select appetizers and drinks.',
      image: 'assets/images/promo6.jpg',
      price: 'Half Price',
      start: 'June 1, 2024',
      end: 'Indefinite',
    },
    {
      title: 'Sweet Treats',
      description: 'Buy one dessert, get another one for free every Friday.',
      image: 'assets/images/promo7.jpg',
      price: 'Buy 1 Get 1 Free',
      start: 'June 10, 2024',
      end: 'August 31, 2024',
    },
  ];
}
