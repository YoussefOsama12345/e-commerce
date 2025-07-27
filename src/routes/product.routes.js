const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const productValidation = require('../validators/product.validator');

// Middleware

// Validators

const createProductValidator = productValidation.createProduct;
const updateProductValidator = productValidation.updateProduct;
const deleteProductValidator = productValidation.deleteProduct;

// Routes
router.get('/products/all',productController.all);
router.get('/products/get-product/:id',productController.getProduct);
router.post('/products/create',createProductValidator,productController.createProduct);
router.put('/products/update-product/:id',updateProductValidator,productController.updateProduct);
router.delete('/products/delete-product/:id',deleteProductValidator,productController.deleteProduct);

module.exports = router;
