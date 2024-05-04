const express = require('express');
const router = express.Router();
const Dish = require('../models/dishModel');
const Drink = require('../models/drinkModel');
const Event = require('../models/eventModel');
const Promotion = require('../models/promotionModel');

// fetch all dish items
router.get('/dishes', async (req, res) => {
    try {
        const items = await Dish.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// fetch all drink items
router.get('/drinks', async (req, res) => {
    try {
        const items = await Drink.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// fetch all event items
router.get('/events', async (req, res) => {
    try {
        const items = await Event.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// fetch all promotion items
router.get('/promotions', async (req, res) => {
    try {
        const items = await Promotion.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// images route
router.get('/images/:type/:id', async (req, res) => {
    try {
        let item;
        switch (req.params.type) {
            case 'dish':
                item = await Dish.findById(req.params.id);
                break;
            case 'drink':
                item = await Drink.findById(req.params.id);
                break;
            case 'event':
                item = await Event.findById(req.params.id);
                break;
            case 'promotion':
                item = await Promotion.findById(req.params.id);
                break;
            default:
                throw new Error('Invalid item type');
        }
        if (!item) {
            return res.status(404).send('Item not found');
        }
        if (!item.image) {
            return res.status(404).send('Image not found');
        }
        res.set('Content-Type', 'image/jpeg');
        res.send(item.image);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
