const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const { REVIEW_MODEL_ERRORS } = require('../constants/error.messages');
const { REVIEW_MODEL_REGEX } = require('../constants/regex.patterns');

const Review = sequelize.define(
  'Review',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    rating: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: REVIEW_MODEL_ERRORS.RATING_MIN,
        },
        max: {
          args: [5],
          msg: REVIEW_MODEL_ERRORS.RATING_MAX,
        },
        isDecimal: {
          msg: REVIEW_MODEL_ERRORS.RATING_DECIMAL,
        },
      },
    },

    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: {
          args: [1, 500],
          msg: REVIEW_MODEL_ERRORS.COMMENT_LENGTH,
        },
        is: {
          args: REVIEW_MODEL_REGEX.COMMENT,
          msg: REVIEW_MODEL_ERRORS.COMMENT_LETTERS_ONLY,
        },
      },
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },

    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
  },
  { timestamps: true }
);

module.exports = Review;
