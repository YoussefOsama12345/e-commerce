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
    },

    items: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
        defaultValue: [],
    },

}, {
    timestamps: true,
})

module.exports = Cart