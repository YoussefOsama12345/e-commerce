const User = require('./user.model');
const Order = require('./order.model');
const OrderItem = require('./orderItem.model');
const Cart = require('./cart.model');
const CartItem = require('./cartItem.model');
const Review = require('./review.model');
const Product = require('./product.model');
const Payment = require('./payment.model');
const Wishlist = require('./wishlists.model');
const ProductImage = require('./productImage.model');
const Category = require('./catogory.model');

function setupAssociations() {
    // User associations
    User.hasMany(Order, { foreignKey: 'userId' });
    Order.belongsTo(User, { foreignKey: 'userId' });

    User.hasOne(Cart, { foreignKey: 'userId' });
    Cart.belongsTo(User, { foreignKey: 'userId' });

    User.hasMany(Review, { foreignKey: 'userId' });
    Review.belongsTo(User, { foreignKey: 'userId' });

    User.hasMany(Wishlist, { foreignKey: 'userId' });
    Wishlist.belongsTo(User, { foreignKey: 'userId' });

    // Order associations
    Order.hasMany(OrderItem, { foreignKey: 'orderId' });
    OrderItem.belongsTo(Order, { foreignKey: 'orderId' });

    Order.hasOne(Payment, { foreignKey: 'orderId' });
    Payment.belongsTo(Order, { foreignKey: 'orderId' });

    // Cart associations
    Cart.hasMany(CartItem, { foreignKey: 'cartId' });
    CartItem.belongsTo(Cart, { foreignKey: 'cartId' });

    // Product associations
    Product.hasMany(Review, { foreignKey: 'productId' });
    Review.belongsTo(Product, { foreignKey: 'productId' });

    Product.hasMany(OrderItem, { foreignKey: 'productId' });
    OrderItem.belongsTo(Product, { foreignKey: 'productId' });

    Product.hasMany(CartItem, { foreignKey: 'productId' });
    CartItem.belongsTo(Product, { foreignKey: 'productId' });

    Product.hasMany(Wishlist, { foreignKey: 'productId' });
    Wishlist.belongsTo(Product, { foreignKey: 'productId' });

    Product.hasMany(ProductImage, { foreignKey: 'productId' });
    ProductImage.belongsTo(Product, { foreignKey: 'productId' });

    // Category associations
    Category.hasMany(Product, { foreignKey: 'categoryId' });
    Product.belongsTo(Category, { foreignKey: 'categoryId' });
}

module.exports = setupAssociations; 

