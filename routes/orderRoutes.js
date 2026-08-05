const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Place Order
router.post('/create', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
