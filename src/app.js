const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const { swaggerDocs } = require('./config/swagger');
const { morganMiddleware } = require('./utils/logger');
const { metricMiddleware} = require('./middlewares/metrics.middleware');
const promClient = require('prom-client');
const errorMiddleware = require('./middlewares/error.middleware');
const AppError = require('./utils/appError');


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

promClient.collectDefaultMetrics();


// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);
app.use(metricMiddleware);

// middleware for not found routes

app.all('*', (req,res,next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

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

app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', promClient.register.contentType);
    res.end(await promClient.register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
});

app.get('/api/v1', (req, res) => {
  res.status(200).json({ message: 'API is running successfully' });
});

// 404 handler
app.use((req, res, next) => {
   next(new AppError.create)
});

// Global error handler
app.use(errorMiddleware);

module.exports = app;
