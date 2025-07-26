const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const { swaggerDocs } = require('./config/swagger');
const { morganMiddleware , logger } = require('./utils/logger');

dotenv.config(); // Load .env config

const app = express();

// Middlewares
app.use(helmet()); 
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);

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
