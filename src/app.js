const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const { swaggerDocs } = require('./config/swagger');
const { morganMiddleware } = require('./utils/logger');

// Routes
// const authRoutes = require('./routes/auth.routes');
// const userRoutes = require('./routes/user.routes');
// const productRoutes = require('./routes/product.routes');
// const orderRoutes = require('./routes/order.routes');
// const cartRoutes = require('./routes/cart.routes');
// const reviewRoutes = require('./routes/review.routes');
// const categoryRoutes = require('./routes/category.routes');
// const paymentRoutes = require('./routes/payment.routes');
// const wishlistRoutes = require('./routes/wishlist.routes');
// const adminRoutes = require('./routes/admin.routes');
// const uploadRoutes = require('./routes/upload.routes');



dotenv.config(); // Load .env config

const app = express();
// const router = express.Router();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);

// Routes
// router.use('/api/v1',authRoutes);
// router.use('/api/v1',userRoutes);
// router.use('/api/v1',productRoutes);
// router.use('/api/v1',orderRoutes);
// router.use('/api/v1',cartRoutes);
// router.use('/api/v1',reviewRoutes);
// router.use('/api/v1',categoryRoutes);
// router.use('/api/v1',paymentRoutes);
// router.use('/api/v1',wishlistRoutes);
// router.use('/api/v1',adminRoutes);
// router.use('/api/v1',uploadRoutes);

// Swagger documentation
swaggerDocs(app);

app.get('/api/v1', (req, res) => {
  res.status(200).json({ message: 'API is running successfully' });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
