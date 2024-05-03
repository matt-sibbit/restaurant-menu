import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  tempMenuItems: any[] = [
    {
      image: 'path/to/image1.jpg',
      title: 'Spaghetti Carbonara',
      description: 'Creamy pasta with pancetta and a blend of cheeses.',
      price: '$12.99'
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Grilled Salmon',
      description: 'Grilled salmon with a dill sauce and seasonal vegetables.',
      price: '$15.99'
    },
    {
      image: 'path/to/image3.jpg',
      title: 'Chicken Parmesan',
      description: 'Breaded chicken breast topped with marinara sauce and melted mozzarella cheese, served with spaghetti.',
      price: '$14.99'
    },
    {
      image: 'path/to/image4.jpg',
      title: 'Beef Burger',
      description: 'Juicy grilled beef patty with lettuce, tomato, pickles, and our special sauce on a toasted bun.',
      price: '$11.99'
    },
    {
      image: 'path/to/image5.jpg',
      title: 'Veggie Pizza',
      description: 'A delightful mix of seasonal vegetables on a classic tomato base, topped with mozzarella cheese.',
      price: '$9.99'
    },
    {
      image: 'path/to/image6.jpg',
      title: 'Caesar Salad',
      description: 'Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing.',
      price: '$8.99'
    },
    {
      image: 'path/to/image7.jpg',
      title: 'Lamb Kebab',
      description: 'Grilled lamb skewers served with tzatziki sauce and a side of Greek salad.',
      price: '$16.99'
    },
    {
      image: 'path/to/image8.jpg',
      title: 'Mango Cheesecake',
      description: 'Creamy cheesecake infused with fresh mango puree on a graham cracker crust.',
      price: '$6.99'
    },    
  ];

  tempDrinkItems: any[] = [
    {
      image: 'path/to/drink1.jpg',
      title: 'Iced Latte',
      description: 'Chilled espresso blended with ice and milk, topped with a splash of cream.',
      price: '$4.99'
    },
    {
      image: 'path/to/drink2.jpg',
      title: 'Mint Mojito',
      description: 'Refreshing classic mojito with a twist of mint and freshly squeezed lime juice.',
      price: '$7.99'
    },
    {
      image: 'path/to/drink3.jpg',
      title: 'Strawberry Smoothie',
      description: 'Made with real strawberries and blended with yogurt and honey for a smooth, refreshing drink.',
      price: '$5.99'
    },
    {
      image: 'path/to/drink4.jpg',
      title: 'Craft Beer',
      description: 'Locally brewed beer with a unique blend of hops and barley, offering a rich, full-bodied taste.',
      price: '$6.99'
    },
    {
      image: 'path/to/drink5.jpg',
      title: 'Pinot Noir',
      description: 'Elegant red wine with notes of cherry and an earthy aroma, perfect with meats or pasta.',
      price: '$9.99 per glass'
    },
    {
      image: 'path/to/drink6.jpg',
      title: 'Ginger Lemonade',
      description: 'House-made lemonade infused with fresh ginger, offering a zesty, invigorating flavor.',
      price: '$3.99'
    },
    {
      image: 'path/to/drink7.jpg',
      title: 'Espresso',
      description: 'Strong, dark coffee made by forcing steam through finely ground coffee beans, served in a small cup.',
      price: '$2.99'
    },
    {
      image: 'path/to/drink8.jpg',
      title: 'Chai Latte',
      description: 'Steamed milk mixed with a spiced tea blend, topped with a light layer of foam.',
      price: '$4.50'
    }
  ];
  

  menuItems: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMenuItems().subscribe(data => {
      this.menuItems = data;
    }, error => {
      console.error('Error fetching menu items:', error);
    });
  }
}
