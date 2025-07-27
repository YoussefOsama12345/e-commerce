const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

// Routes
router.post('/cart/add-to-cart',cartController.addToCart);
router.get('/cart/get-cart',cartController.getCart);
router.put('/cart/update-cart/:id',cartController.updateCart);
router.delete('/cart/delete-cart/:id',cartController.deleteCart);
router.delete('/cart/delete-all-cart',cartController.deleteAllCart);

module.exports = router;
