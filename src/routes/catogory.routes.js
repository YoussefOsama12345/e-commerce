const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const categoryValidation = require('../validators/category.validator');

// Middleware

// Validators

const createCategoryValidator = categoryValidation.createCategory;
const updateCategoryValidator = categoryValidation.updateCategory;
const deleteCategoryValidator = categoryValidation.deleteCategory;

// Routes
router.get('/categories/all',categoryController.all);
router.get('/categories/get-category/:id',categoryController.getCategory);
router.post('/categories/create-category',createCategoryValidator,categoryController.createCategory);
router.put('/categories/update-category/:id',updateCategoryValidator,categoryController.updateCategory);
router.delete('/categories/delete-category/:id',deleteCategoryValidator,categoryController.deleteCategory);

module.exports = router;
