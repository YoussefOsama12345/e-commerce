const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const { PRODUCT_MODEL_REGEX } = require('../constants/regex.patterns');
const { PRODUCT_MODEL_ERRORS } = require('../constants/error.messages');

const Product = sequelize.define(
  'Product',
  {
    // required fields

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: PRODUCT_MODEL_ERRORS.NAME_UNIQUE,
      },
      validate: {
        notNull: {
          msg: PRODUCT_MODEL_ERRORS.NAME_NOT_NULL,
        },
        notEmpty: {
          msg: PRODUCT_MODEL_ERRORS.NAME_NOT_EMPTY,
        },
        len: {
          args: [2, 100],
          msg: PRODUCT_MODEL_ERRORS.NAME_LENGTH,
        },
        is: {
          args: [PRODUCT_MODEL_REGEX.NAME],
          msg: PRODUCT_MODEL_ERRORS.NAME_LETTERS_ONLY,
        },
      },
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: PRODUCT_MODEL_ERRORS.DESCRIPTION_NOT_NULL,
        },
        notEmpty: {
          msg: PRODUCT_MODEL_ERRORS.DESCRIPTION_NOT_EMPTY,
        },
        len: {
          args: [10, 500],
          msg: PRODUCT_MODEL_ERRORS.DESCRIPTION_LENGTH,
        },
        is: {
          args: [PRODUCT_MODEL_REGEX.DESCRIPTION],
          msg: PRODUCT_MODEL_ERRORS.DESCRIPTION_LETTERS_ONLY,
        },
      },
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          msg: PRODUCT_MODEL_ERRORS.PRICE_REQUIRED,
        },
        min: {
          args: [0],
          msg: PRODUCT_MODEL_ERRORS.PRICE_MIN,
        },
        max: {
          args: [1000000],
          msg: PRODUCT_MODEL_ERRORS.PRICE_MAX,
        },
        isDecimal: {
          msg: PRODUCT_MODEL_ERRORS.PRICE_DECIMAL,
        },
      },
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: PRODUCT_MODEL_ERRORS.STOCK_REQUIRED,
        },
        min: {
          args: [0],
          msg: PRODUCT_MODEL_ERRORS.STOCK_MIN,
        },
        max: {
          args: [1000000],
          msg: PRODUCT_MODEL_ERRORS.STOCK_MAX,
        },
      },
    },

    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
      validate: {
        notNull: {
          msg: PRODUCT_MODEL_ERRORS.CATEGORY_NOT_NULL,
        },
      },
    },

    // Optional fields

    discountPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        min: {
          args: [0],
          msg: PRODUCT_MODEL_ERRORS.DISCOUNT_PRICE_MIN,
        },
        max: {
          args: [100],
          msg: PRODUCT_MODEL_ERRORS.DISCOUNT_PRICE_MAX,
        },
      },
    },

    brand: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [2, 50],
          msg: PRODUCT_MODEL_ERRORS.BRAND_LENGTH,
        },
        is: {
          args: [PRODUCT_MODEL_REGEX.BRAND],
          msg: PRODUCT_MODEL_ERRORS.BRAND_LETTERS_ONLY,
        },
      },
    },

    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      validate: {
        isArray: {
          msg: PRODUCT_MODEL_ERRORS.IMAGES_ARRAY,
        },
        isUrl: {
          msg: PRODUCT_MODEL_ERRORS.IMAGES_URL,
        },
      },
    },

    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          msg: PRODUCT_MODEL_ERRORS.THUMBNAIL_URL,
        },
      },
    },

    rating: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: true,
      validate: {
        min: {
          args: [0],
          msg: PRODUCT_MODEL_ERRORS.RATING_MIN,
        },
        max: {
          args: [5],
          msg: PRODUCT_MODEL_ERRORS.RATING_MAX,
        },
        isDecimal: {
          msg: PRODUCT_MODEL_ERRORS.RATING_DECIMAL,
        },
      },
    },

    numReviews: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: {
          args: [0],
          msg: PRODUCT_MODEL_ERRORS.NUM_REVIEWS_MIN,
        },
        max: {
          args: [1000],
          msg: PRODUCT_MODEL_ERRORS.NUM_REVIEWS_MAX,
        },
      },
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },

    weight: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        min: {
          args: [0],
          msg: PRODUCT_MODEL_ERRORS.WEIGHT_MIN,
        },
        max: {
          args: [1000],
          msg: PRODUCT_MODEL_ERRORS.WEIGHT_MAX,
        },
      },
    },

    dimensions: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [2, 50],
          msg: PRODUCT_MODEL_ERRORS.DIMENSIONS_LENGTH,
        },
        is: {
          args: [PRODUCT_MODEL_REGEX.DIMENSIONS],
          msg: PRODUCT_MODEL_ERRORS.DIMENSIONS_LETTERS_ONLY,
        },
      },
    },

    color: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [2, 50],
          msg: PRODUCT_MODEL_ERRORS.COLOR_LENGTH,
        },
        is: {
          args: [PRODUCT_MODEL_REGEX.COLOR],
          msg: PRODUCT_MODEL_ERRORS.COLOR_LETTERS_ONLY,
        },
      },
    },

    material: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [2, 50],
          msg: PRODUCT_MODEL_ERRORS.MATERIAL_LENGTH,
        },
        is: {
          args: [PRODUCT_MODEL_REGEX.MATERIAL],
          msg: PRODUCT_MODEL_ERRORS.MATERIAL_LETTERS_ONLY,
        },
      },
    },

    expiryDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  { timestamps: true }
);

module.exports = Product;
