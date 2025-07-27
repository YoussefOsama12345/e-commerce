const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const userValidation = require('../validators/user.validator');

// Middleware

// Validators

const updateProfileValidator = userValidation.updateProfile;
const deleteProfileValidator = userValidation.deleteProfile;

// Routes
router.get('/users/me',userController.me);
router.get('/users/all',userController.all);
router.put('/users/update-profile',updateProfileValidator,userController.updateProfile);
router.delete('/users/delete-profile',deleteProfileValidator,userController.deleteProfile);

module.exports = router;
