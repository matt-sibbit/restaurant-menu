const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: Buffer
});

module.exports = mongoose.model('Dish', dishSchema, 'dishes');