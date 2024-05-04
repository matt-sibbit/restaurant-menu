const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
    name: String,
    type: String,
    description: String,
    price: Number,
    image: Buffer
});

const Drink = mongoose.model('Drink', drinkSchema, 'drinks');

module.exports = Drink;