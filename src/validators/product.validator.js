const joi = require('joi');

const createProductSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  quantity: joi.number().required(),
  categoryId: joi.string().required(),
});

const updateProductSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  quantity: joi.number().required(),
  categoryId: joi.string().required(),
});

const deleteProductSchema = joi.object({
  id: joi.string().required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
};
