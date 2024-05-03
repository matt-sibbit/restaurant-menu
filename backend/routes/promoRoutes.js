const express = require("express");
const Promo = require("../models/promoModel"); // Adjust the path as necessary
const router = express.Router();

// Get all promotions
router.get("/", async (req, res) => {
  try {
    const promotions = await Promo.find();
    res.json(promotions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Post a new promotion
router.post("/", async (req, res) => {
  const promo = new Promo({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    start: req.body.start,
    end: req.body.end,
  });

  try {
    const newPromo = await promo.save();
    res.status(201).json(newPromo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
