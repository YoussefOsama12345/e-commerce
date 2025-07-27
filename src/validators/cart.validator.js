const joi = require('joi');

const addToCartSchema = joi.object({
  productId: joi.string().required(),
  quantity: joi.number().required(),
});

const updateCartSchema = joi.object({
  productId: joi.string().required(),
  quantity: joi.number().required(),
});

const deleteCartSchema = joi.object({
  productId: joi.string().required(),
});

module.exports = {
  addToCartSchema,
  updateCartSchema,
  deleteCartSchema,
};
