const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const {PRODUCT_IMAGE_MODEL_ERRORS} = require('../constants/error.messages');
const {PRODUCT_IMAGE_REGEX} = require('../constants/regex.patterns');

const ProductImage = sequelize.define('ProductImage', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },

    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: {
                msg: PRODUCT_IMAGE_MODEL_ERRORS.IMAGE_URL
            },
            notNull: {
                msg: PRODUCT_IMAGE_MODEL_ERRORS.IMAGE_URL_NOT_NULL
            },
            notEmpty: {
                msg: PRODUCT_IMAGE_MODEL_ERRORS.IMAGE_URL_NOT_EMPTY
            },
            is: {
                args: [PRODUCT_IMAGE_REGEX.IMAGE_URL],
                msg: PRODUCT_IMAGE_MODEL_ERRORS.IMAGE_URL
            }
        }
    },

    altText: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: PRODUCT_IMAGE_MODEL_ERRORS.ALT_TEXT_NOT_NULL
            },
            notEmpty: {
                msg: PRODUCT_IMAGE_MODEL_ERRORS.ALT_TEXT_NOT_EMPTY
            },
            len: {
                args: [1, 100],
                msg: PRODUCT_IMAGE_MODEL_ERRORS.ALT_TEXT_LENGTH
            }
        }
    }
    
},{timestamps: true})


module.exports = ProductImage;