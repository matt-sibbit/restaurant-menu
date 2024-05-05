const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    time: String,
    location: String,
    image: Buffer
});

const Event = mongoose.model('Event', eventSchema, 'events');

module.exports = Event;