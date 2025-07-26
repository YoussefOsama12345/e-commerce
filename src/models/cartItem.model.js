const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')
const {CART_ITEM_MODEL_ERRORS} = require('../constants/error.messages')

const CartItem = sequelize.define('CartItem',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Carts',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Products',
            id: 'id',
        },
        onDelete: 'CASCADE'
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: {
                args: 1,
                msg : CART_ITEM_MODEL_ERRORS.QUANTITY_MIN
            },

            max: {
                args: 100,
                msg: CART_ITEM_MODEL_ERRORS.QUANTITY_MAX
            }
        }
    },

    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false, 
    },

    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {timestamps : true})


module.exports = CartItem;