const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const { PAYMENT_MODEL_ERRORS } = require('../constants/error.messages');

const Payment = sequelize.define(
  'Payment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Orders',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },

    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: {
          args: [0.01],
          msg: PAYMENT_MODEL_ERRORS.AMOUNT_MIN,
        },
        max: {
          args: [1000000],
          msg: PAYMENT_MODEL_ERRORS.AMOUNT_MAX,
        },
        notNull: {
          msg: PAYMENT_MODEL_ERRORS.AMOUNT_NOT_NULL,
        },
      },
    },

    status: {
      type: DataTypes.ENUM('pending', 'paid', 'failed'),
      allowNull: false,
      defaultValue: 'pending',
    },

    paymentMethod: {
      type: DataTypes.ENUM(
        'credit_card',
        'debit_card',
        'paypal',
        'cash_on_delivery'
      ),
      allowNull: false,
      defaultValue: 'credit_card',
    },

    transactionId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: PAYMENT_MODEL_ERRORS.TRANSACTION_ID_NOT_EMPTY,
        },
      },
    },

    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: PAYMENT_MODEL_ERRORS.PAYMENT_DATE_INVALID,
        },
        notNull: {
          msg: PAYMENT_MODEL_ERRORS.PAYMENT_DATE_NOT_NULL,
        },
        notEmpty: {
          msg: PAYMENT_MODEL_ERRORS.PAYMENT_DATE_NOT_EMPTY,
        },
      },
    },

    paymentGateway: {
      type: DataTypes.ENUM('stripe', 'paypal', 'razorpay'),
      allowNull: false,
      defaultValue: 'stripe',
    },
  },
  { timestamps: true }
);

module.exports = Payment;
