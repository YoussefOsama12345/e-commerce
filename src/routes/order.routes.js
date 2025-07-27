const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const orderValidation = require('../validators/order.validator');

// Middleware

// Validators

const createOrderValidator = orderValidation.createOrder;
const updateOrderValidator = orderValidation.updateOrder;
const deleteOrderValidator = orderValidation.deleteOrder;

// Routes
router.post('/orders/create-order',createOrderValidator,orderController.createOrder);
router.get('/orders/all',orderController.all);
router.get('/orders/get-order/:id',orderController.getOrder);
router.put('/orders/update-order/:id',updateOrderValidator,orderController.updateOrder);
router.delete('/orders/delete-order/:id',deleteOrderValidator,orderController.deleteOrder);

module.exports = router;
