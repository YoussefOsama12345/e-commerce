const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

// Routes
router.get('/admin/all',adminController.all);
router.get('/admin/get-admin/:id',adminController.getAdmin);
router.post('/admin/create-admin',adminController.createAdmin);
router.put('/admin/update-admin/:id',adminController.updateAdmin);
router.delete('/admin/delete-admin/:id',adminController.deleteAdmin);

module.exports = router;
