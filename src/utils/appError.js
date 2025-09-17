
class AppError extends Error {
  constructor(message, statusCode, errorType = 'ApplicationError') {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    this.errorType = errorType;
    
    Error.captureStackTrace(this, this.constructor);
  }

  createErrorResponse(){
    return {
      status: this.status,
      statusCode: this.statusCode,
      message: this.message,
      errorType: this.errorType,
      stack: this.stack
    };
  }
}

module.exports = AppError;