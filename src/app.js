const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const { swaggerDocs } = require('./config/swagger');
const fs = require('fs');
const path = require('path');

dotenv.config(); // Load .env config

const app = express();

// create logs directory

const logDir = path.join(process.cwd(), 'logs');
if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

// create a write stream for logs/access.log

const accessLogStream = fs.createWriteStream(
    path.join(logDir, 'access.log'), { 
        flags: 'a' 
    }
);

// Middlewares
app.use(helmet()); 
app.use(cors()); 
app.use(morgan('combined', {stream: accessLogStream}))
app.use(morgan('dev')); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

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
