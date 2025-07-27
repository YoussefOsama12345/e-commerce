const joi = require('joi');

const createOrderSchema = joi.object({
  productId: joi.string().required(),
  quantity: joi.number().required(),
});

const updateOrderSchema = joi.object({
  productId: joi.string().required(),
  quantity: joi.number().required(),
});

const deleteOrderSchema = joi.object({
  id: joi.string().required(),
});

module.exports = {
  createOrderSchema,
  updateOrderSchema,
  deleteOrderSchema,
};
