const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlist.controller');

// Routes

router.post('/wishlists/add-to-wishlist',wishlistController.addToWishlist);
router.get('/wishlists/get-wishlist',wishlistController.getWishlist);
router.get('/wishlists/all',wishlistController.all);
router.delete('/wishlists/delete-wishlist/:id',wishlistController.deleteWishlist);

module.exports = router;
