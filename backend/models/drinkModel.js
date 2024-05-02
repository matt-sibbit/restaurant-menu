const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number
});

const Drink = mongoose.model('Drink', drinkSchema, 'drinks');

module.exports = Drink;