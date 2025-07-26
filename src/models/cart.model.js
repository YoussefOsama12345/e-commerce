const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Cart = sequelize.define('Cart', {
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

    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,  
        validate: {
            min: {
                args: [0],
                msg: CART_MODEL_ERRORS.TOTAL_PRICE_MIN
            },
            max: {
                args: [1000000],
                msg: CART_MODEL_ERRORS.TOTAL_PRICE_MAX
            }
        }
    },
}, {
    timestamps: true,
})

module.exports = Cart