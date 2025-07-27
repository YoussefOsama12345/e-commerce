const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');

// Routes
router.post('/payments/create-payment',paymentController.createPayment);
router.get('/payments/get-payment/:id',paymentController.getPayment);
router.get('/payments/all',paymentController.all);
router.put('/payments/update-payment/:id',paymentController.updatePayment);
router.delete('/payments/delete-payment/:id',paymentController.deletePayment);

module.exports = router;
