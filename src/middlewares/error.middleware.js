const AppError = require('../utils/appError');

const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (err instanceof AppError) {
    return res.status(err.statusCode).json(err.createErrorResponse());
  }

  res.status(err.statusCode).json({
    status: err.status,
    message: 'Something went wrong! Please try again later.',
    errorType: 'InternalServerError',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

module.exports = errorMiddleware;
