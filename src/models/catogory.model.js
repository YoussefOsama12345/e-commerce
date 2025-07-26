const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const {CATEGORY_MODEL_ERRORS} = require('../constants/error.messages');
const {CATEGORY_MODEL_REGEX} = require('../constants/regex.patterns');

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: CATEGORY_MODEL_ERRORS.NAME_NOT_NULL
            },
            notEmpty: {
                msg: CATEGORY_MODEL_ERRORS.NAME_NOT_EMPTY
            },
            len: {
                args: [3, 50],
                msg: CATEGORY_MODEL_ERRORS.NAME_LENGTH
            },
            is: {
                args: [CATEGORY_MODEL_REGEX.NAME],
                msg: CATEGORY_MODEL_ERRORS.NAME_LETTERS_ONLY
            }
        }
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: CATEGORY_MODEL_ERRORS.DESCRIPTION_NOT_NULL
            },
            notEmpty: {
                msg: CATEGORY_MODEL_ERRORS.DESCRIPTION_NOT_EMPTY
            },
            len: {
                args: [10, 500],
                msg: CATEGORY_MODEL_ERRORS.DESCRIPTION_LENGTH
            },
            is:{
                args: [CATEGORY_MODEL_REGEX.DESCRIPTION],
                msg: CATEGORY_MODEL_ERRORS.DESCRIPTION_LETTERS_ONLY
            }
        }
    },

    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: {
                msg: CATEGORY_MODEL_ERRORS.IMAGE_URL
            },
            notNull: {
                msg: CATEGORY_MODEL_ERRORS.IMAGE_NOT_NULL
            },
            notEmpty: {
                msg: CATEGORY_MODEL_ERRORS.IMAGE_NOT_EMPTY
            },
            is: {
                args: [CATEGORY_MODEL_REGEX.IMAGE],
                msg: CATEGORY_MODEL_ERRORS.IMAGE_URL
            }
        }
    }
}, {timestamps: true});


module.exports = Category;
