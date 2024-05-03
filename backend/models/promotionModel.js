const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    name: String,
    deal: String,
    price: Number,
    start: Date,
    end: Date,
    image: Buffer
});

const Promotion = mongoose.model('Promotion', promotionSchema, 'promotions');

module.exports = Promotion;