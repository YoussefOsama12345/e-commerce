const sequalize = require('../config/db');
const { DataTypes } = require('sequelize');
const { ROLE_MODEL_ERRORS } = require('../constants/error.messages');
const { ROLE_MODEL_REGEX } = require('../constants/regex.patterns');

const Role = sequalize.define(
  'Role',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: ROLE_MODEL_ERRORS.NAME_NOT_NULL,
        },
        notEmpty: {
          msg: ROLE_MODEL_ERRORS.NAME_NOT_EMPTY,
        },
        len: {
          args: [2, 50],
          msg: ROLE_MODEL_ERRORS.NAME_LENGTH,
        },
        is: {
          args: [ROLE_MODEL_REGEX.NAME],
          msg: ROLE_MODEL_ERRORS.NAME_LETTERS_ONLY,
        },
      },
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: ROLE_MODEL_ERRORS.DESCRIPTION_NOT_NULL,
        },
        notEmpty: {
          msg: ROLE_MODEL_ERRORS.DESCRIPTION_NOT_EMPTY,
        },
        len: {
          args: [3, 200],
          msg: ROLE_MODEL_ERRORS.DESCRIPTION_LENGTH,
        },
        is: {
          args: [ROLE_MODEL_REGEX.DESCRIPTION],
          msg: ROLE_MODEL_ERRORS.DESCRIPTION_LETTERS_ONLY,
        },
      },
    },
  },
  { timestamps: true }
);

module.exports = Role;
