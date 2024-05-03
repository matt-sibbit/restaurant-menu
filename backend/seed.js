const dotenv = require('dotenv').config();
const fs = require('fs');
const path = require('path');

const mongoose = require('mongoose');
const Drink = require('./models/drinkModel');
const Event = require('./models/eventModel');
const Dish = require('./models/dishModel');
const Promotion = require('./models/promotionModel');
const dbUri = process.env.DB_URI;

const drinks = [
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/drink/drink1.jpg')),
        name: 'Iced Latte',
        type: 'Coffee',
        description: 'Chilled espresso blended with ice and milk, topped with a splash of cream.',
        price: 4.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/drink/drink2.jpg')),
        name: 'Mint Mojito',
        type: 'Cocktail',
        description: 'Refreshing classic mojito with a twist of mint and freshly squeezed lime juice.',
        price: 7.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/drink/drink3.jpg')),
        name: 'Strawberry Smoothie',
        type: 'Smoothie',
        description: 'Made with real strawberries and blended with yogurt and honey for a smooth, refreshing drink.',
        price: 5.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/drink/drink4.jpg')),
        name: 'Craft Beer',
        type: 'Beer',
        description: 'Locally brewed beer with a unique blend of hops and barley, offering a rich, full-bodied taste.',
        price: 6.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/drink/drink5.jpg')),
        name: 'Pinot Noir',
        type: 'Wine',
        description: 'Elegant red wine with notes of cherry and an earthy aroma, perfect with meats or pasta. Price per glass.',
        price: 9.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/drink/drink6.jpg')),
        name: 'Ginger Lemonade',
        type: 'Non-alcoholic',
        description: 'House-made lemonade infused with fresh ginger, offering a zesty, invigorating flavor.',
        price: 3.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/drink/drink7.jpg')),
        name: 'Espresso',
        type: 'Coffee',
        description: 'Strong, dark coffee made by forcing steam through finely ground coffee beans, served in a small cup.',
        price: 2.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/drink/drink8.jpg')),
        name: 'Chai Latte',
        type: 'Tea',
        description: 'Steamed milk mixed with a spiced tea blend, topped with a light layer of foam.',
        price: 4.50
    }
];
const dishes = [
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/dish/dish1.jpg')),
        name: 'Spaghetti Carbonara',
        type: 'Entree',
        description: 'Creamy pasta with pancetta and a blend of cheeses.',
        price: 12.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/dish/dish2.jpg')),
        name: 'Grilled Salmon',
        type: 'Entree',
        description: 'Grilled salmon with a dill sauce and seasonal vegetables.',
        price: 15.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/dish/dish3.jpg')),
        name: 'Chicken Parmesan',
        type: 'Entree',
        description: 'Breaded chicken breast topped with marinara sauce and melted mozzarella cheese, served with spaghetti.',
        price: 14.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/dish/dish4.jpg')),
        name: 'Beef Burger',
        type: 'Entree',
        description: 'Juicy grilled beef patty with lettuce, tomato, pickles, and our special sauce on a toasted bun.',
        price: 11.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/dish/dish5.jpg')),
        name: 'Veggie Pizza',
        type: 'Entree',
        description: 'A delightful mix of seasonal vegetables on a classic tomato base, topped with mozzarella cheese.',
        price: 9.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/dish/dish6.jpg')),
        name: 'Caesar Salad',
        type: 'Appetizer',
        description: 'Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing.',
        price: 8.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/dish/dish7.jpg')),
        name: 'Lamb Kebab',
        type: 'Entree',
        description: 'Grilled lamb skewers served with tzatziki sauce and a side of Greek salad.',
        price: 16.99
    },
    {
        image: fs.readFileSync(path.join(__dirname, 'assets/images/dish/dish8.jpg')),
        name: 'Mango Cheesecake',
        type: 'Dessert',
        description: 'Creamy cheesecake infused with fresh mango puree on a graham cracker crust.',
        price: 6.99
    }
];
const promotions = [
    {
        title: 'Summer Special',
        description: 'Get 20% off on all desserts!',
        image: fs.readFileSync(path.join(__dirname, 'assets/images/promotion/promo1.jpg')),
        price: 5,
        start: new Date('2024-06-01'),
        end: new Date('2024-08-31'),
    },
    {
        title: 'Happy Hour',
        description: 'Buy one get one free on selected drinks!',
        image: fs.readFileSync(path.join(__dirname, 'assets/images/promotion/promo2.jpg')),
        price: 8,
        start: new Date('2024-06-01'),
        end: new Date('2024-06-30'),
    },
    {
        title: 'Weekend Brunch Bonanza',
        description: 'Enjoy a 25% discount on our brunch menu every weekend!',
        image: fs.readFileSync(path.join(__dirname, 'assets/images/promotion/promo3.jpg')),
        price: 10,
        start: new Date('2024-07-01'),
        end: null,
    },
    {
        title: 'Family Feast',
        description:
            'Order our Family Meal Deal and receive free appetizers for the table.',
        image: fs.readFileSync(path.join(__dirname, 'assets/images/promotion/promo4.jpg')),
        price: 30,
        start: new Date('2024-06-15'),
        end: new Date('2024-07-15'),
    },
    {
        title: 'Taste of the Season',
        description:
            'Try our new dishes made with fresh, seasonal ingredients available at a 20% discount.',
        image: fs.readFileSync(path.join(__dirname, 'assets/images/promotion/promo5.jpg')),
        price: 0, // indicates price varies
        start: new Date('2024-09-01'),
        end: new Date('2024-11-30'),
    },
    {
        title: 'Midnight Munchies',
        description:
            'From 10 PM to midnight, enjoy 50% off select appetizers and drinks.',
        image: fs.readFileSync(path.join(__dirname, 'assets/images/promotion/promo6.jpg')),
        price: -1, // indicates half price
        start: new Date('2024-06-01'),
        end: null, // indicate no specified end date
    },
    {
        title: 'Sweet Treats',
        description: 'Buy one dessert, get another one for free every Friday.',
        image: fs.readFileSync(path.join(__dirname, 'assets/images/promotion/promo7.jpg')),
        price: -2, // indicates bogo
        start: new Date('2024-06-10'),
        end: new Date('2024-08-31'),
    }
];
const events = [
    {
        name: 'Jazz Night',
        description: 'Enjoy an evening of live jazz music from local bands.',
        date: new Date('2024-06-20'),
        time: '7:00 PM',
        location: 'Main Hall',
        image: fs.readFileSync(path.join(__dirname, 'assets/images/event/events1.jpg'))
    },
    {
        name: 'Trivia Night',
        description: 'Test your knowledge at our weekly trivia night and win prizes!',
        date: new Date('2024-06-25'),
        time: '8:00 PM',
        location: 'Upstairs Bar',
        image: fs.readFileSync(path.join(__dirname, 'assets/images/event/events2.jpg'))
    },
    {
        name: 'Karaoke Party',
        description: 'Sing your heart out at our karaoke party this Saturday.',
        date: new Date('2024-07-05'),
        time: '9:00 PM',
        location: 'Lounge Area',
        image: fs.readFileSync(path.join(__dirname, 'assets/images/event/events3.jpg'))
    },
    {
        name: 'Italian Cooking Class',
        description: 'Join us for a cooking class and learn to make classic Italian dishes.',
        date: new Date('2024-07-12'),
        time: '5:00 PM',
        location: 'Kitchen',
        image: fs.readFileSync(path.join(__dirname, 'assets/images/event/events4.jpg'))
    },
    {
        name: '80s Themed Dinner',
        description: 'Dress up in your favorite 80s attire and enjoy a themed dinner night.',
        date: new Date('2024-08-01'),
        time: '6:00 PM',
        location: 'Rooftop',
        image: fs.readFileSync(path.join(__dirname, 'assets/images/event/events5.jpg'))
    }
];

async function seedDB() {
    try {
        await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');

        await Drink.deleteMany({});
        await Drink.insertMany(drinks);
        console.log('Drinks added');

        await Event.deleteMany({});
        await Event.insertMany(events);
        console.log('Events added');

        await Dish.deleteMany({});
        await Dish.insertMany(dishes);
        console.log('Menu Items added');

        await Promotion.deleteMany({});
        await Promotion.insertMany(promotions);
        console.log('Promotions added');

        mongoose.disconnect();
        console.log('MongoDB disconnected');
    } catch (error) {
        console.error('Error seeding data:', error.message);
        mongoose.disconnect();
    }
}

seedDB();
