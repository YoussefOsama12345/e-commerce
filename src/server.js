const app = require('./app');
const sequelize = require('./config/db');
const { DEVELOPMENT_ENV } = require('./config/env');
const setupAssociations = require('./models/associations');

// models
const User = require('./models/user.model');
const Product = require('./models/product.model');
const Order = require('./models/order.model');
const Cart = require('./models/cart.model');
const Review = require('./models/review.model');
const Category = require('./models/catogory.model');
const ProductImage = require('./models/productImage.model');
const Payment = require('./models/payment.model');
const Wishlist = require('./models/wishlists.model');
const CartItem = require('./models/cartItem.model');
const OrderItem = require('./models/orderItem.model');
const Role = require('./models/roles.model');
const Permission = require('./models/Permission.model');

// Server port
const PORT = DEVELOPMENT_ENV.port || 5000;

// Setup associations BEFORE syncing
setupAssociations();

sequelize
  .sync({ force: false, alter: true })
  .then(() => {
    console.log('All models synced with DB');
  })
  .catch((err) => {
    console.error('Error syncing models:', err);
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
