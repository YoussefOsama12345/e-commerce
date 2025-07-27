const joi = require('joi');

const createCategorySchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  image: joi.string().required(),
});

const updateCategorySchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
});

const deleteCategorySchema = joi.object({
  id: joi.string().required(),
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  deleteCategorySchema,
};
