const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const { ORDER_MODEL_ERRORS } = require('../constants/error.messages');

const Order = sequelize.define(
  'Order',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },

    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: ORDER_MODEL_ERRORS.TOTAL_AMOUNT_MIN,
        },
        max: {
          args: [1000000],
          msg: ORDER_MODEL_ERRORS.TOTAL_AMOUNT_MAX,
        },
      },
    },

    status: {
      type: DataTypes.ENUM(
        'pending',
        'processing',
        'shipped',
        'delivered',
        'cancelled'
      ),
      allowNull: false,
      defaultValue: 'pending',
    },

    shippingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    paymentMethod: {
      type: DataTypes.ENUM(
        'credit_card',
        'debit_card',
        'paypal',
        'cash_on_delivery'
      ),
      allowNull: false,
      defaultValue: 'cash_on_delivery',
    },

    paymentStatus: {
      type: DataTypes.ENUM('pending', 'paid', 'failed'),
      allowNull: false,
      defaultValue: 'pending',
    },

    paymentId: {
      type: DataTypes.STRING,
    },

    placedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    deliveredAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    cancelledAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Order;
