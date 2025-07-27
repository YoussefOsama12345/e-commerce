const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authValidation = require('../validators/auth.validator');

// Middleware


// Validators

const registerValidator = authValidation.register;
const loginValidator = authValidation.login;

// Routes
router.post('/auth/register',registerValidator,authController.register);
router.post('/auth/login',loginValidator,authController.login);
router.post('/auth/logout',authController.logout);
router.post('/auth/forgot-password',authController.forgotPassword);
router.post('/auth/reset-password',authController.resetPassword);
router.post('/auth/google',authController.google);
router.post('/auth/facebook',authController.facebook);
router.post('/auth/verify-email',authController.verifyEmail);
router.post('/auth/resend-verification-email',authController.resendVerificationEmail);
router.post('/auth/refresh-token',authController.refreshToken);

module.exports = router;

