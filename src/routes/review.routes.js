const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller');
const reviewValidation = require('../validators/review.validator');

// Middleware

// Validators

const createReviewValidator = reviewValidation.createReview;
const updateReviewValidator = reviewValidation.updateReview;
const deleteReviewValidator = reviewValidation.deleteReview;

// Routes
router.post('/reviews/creat-review',createReviewValidator,reviewController.creatReview);
router.get('/reviews/all',reviewController.all);
router.get('/reviews/get-review/:id',reviewController.getReview);
router.put('/reviews/update-review/:id',updateReviewValidator,reviewController.updateReview);
router.delete('/reviews/delete-review/:id',deleteReviewValidator,reviewController.deleteReview);
;
module.exports = router;
