const { createLogger, format, transports } = require('winston');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Ensure log directory exists
const logDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Log format
const logFormat = format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

// Winston App Logger
const logger = createLogger({
  level: 'info',
  format: format.combine(format.colorize(), format.timestamp(), logFormat),
  transports: [
    new transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error',
    }),
    new transports.File({ filename: path.join(logDir, 'app.log') }),
  ],
});

// Winston Auth Logger
const authLogger = createLogger({
  level: 'info',
  format: format.combine(format.colorize(), format.timestamp(), logFormat),
  transports: [
    new transports.File({ filename: path.join(logDir, 'auth.log') }),
  ],
});

const accessLogStream = fs.createWriteStream(
  path.join(logDir, 'access.log'),
  { flags: 'a' }
);

// Morgan Middleware writing directly to access.log
const morganMiddleware = morgan('combined', { stream: accessLogStream });

module.exports = {
  logger,
  authLogger,
  morganMiddleware,
};
