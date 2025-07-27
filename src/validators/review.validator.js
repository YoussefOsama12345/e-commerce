const joi = require('joi');

const createReviewSchema = joi.object({
  productId: joi.string().required(),
  rating: joi.number().required(),
  comment: joi.string().required(),
});

const updateReviewSchema = joi.object({
  rating: joi.number().required(),
  comment: joi.string().required(),
});

const deleteReviewSchema = joi.object({
  id: joi.string().required(),
});

module.exports = {
  createReviewSchema,
  updateReviewSchema,
  deleteReviewSchema,
};
