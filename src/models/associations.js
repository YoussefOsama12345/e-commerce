const User = require('./user.model');
const Order = require('./order.model');
const Cart = require('./cart.model');
const Review = require('./review.model');
const Product = require('./product.model');

function setupAssociations() {
    Order.belongsTo(User, { foreignKey: 'userId' });
    User.hasMany(Order, { foreignKey: 'userId' });

    Cart.belongsTo(User, { foreignKey: 'userId' });
    User.hasOne(Cart, { foreignKey: 'userId' });

    User.hasMany(Review, { foreignKey: 'userId' });
    Review.belongsTo(User, { foreignKey: 'userId' });

    Product.hasMany(Review, { foreignKey: 'productId' });
    Review.belongsTo(Product, { foreignKey: 'productId' });
}

module.exports = setupAssociations; 

