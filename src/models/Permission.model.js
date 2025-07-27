const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const { PERMISSION_MODEL_ERRORS } = require('../constants/error.messages');
const { PERMISSION_MODEL_REGEX } = require('../constants/regex.patterns');

const Permission = sequelize.define(
  'permission',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        min: {
          args: 3,
          msg: PERMISSION_MODEL_ERRORS.NAME_LENGTH_MIN,
        },
        max: {
          args: 20,
          msg: PERMISSION_MODEL_ERRORS.NAME_LENGTH_MAX,
        },
        notEmpty: {
          args: true,
          msg: PERMISSION_MODEL_ERRORS.NAME_NOT_EMPTY,
        },
        notNull: {
          args: true,
          msg: PERMISSION_MODEL_ERRORS.NAME_NOT_NULL,
        },
        is: {
          args: PERMISSION_MODEL_REGEX.NAME,
          msg: PERMISSION_MODEL_ERRORS.NAME_LETTERS_ONLY,
        },
      },
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: PERMISSION_MODEL_ERRORS.DESCRIPTION_NOT_NULL,
        },
        notNull: {
          args: true,
          msg: PERMISSION_MODEL_ERRORS.DESCRIPTION_NOT_EMPTY,
        },
        min: {
          args: 3,
          msg: PERMISSION_MODEL_ERRORS.DESCRIPTION_LENGTH_MIN,
        },
        max: {
          args: 150,
          msg: PERMISSION_MODEL_ERRORS.DESCRIPTION_LENGTH_MAX,
        },
        is: {
          args: PERMISSION_MODEL_REGEX.DESCRIPTION,
          msg: PERMISSION_MODEL_ERRORS.DESCRIPTION_LETTERS_ONLY,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Permission;
