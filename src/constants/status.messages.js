STATUS_MESSAGES = {
  SUCCESS: { code: 200, message: 'Operation completed successfully.' },
  CREATED: { code: 201, message: 'Resource created successfully.' },
  UPDATED: { code: 200, message: 'Resource updated successfully.' },
  DELETED: { code: 200, message: 'Resource deleted successfully.' },
  FETCHED: { code: 200, message: 'Resource fetched successfully.' },
  LOGGED_IN: { code: 200, message: 'User logged in successfully.' },
  LOGGED_OUT: { code: 200, message: 'User logged out successfully.' },
  REGISTERED: { code: 201, message: 'User registered successfully.' },
  EMAIL_SENT: { code: 200, message: 'Email sent successfully.' },
  PASSWORD_RESET: { code: 200, message: 'Password reset successfully.' },
  EMAIL_VERIFIED: { code: 200, message: 'Email verified successfully.' },
  CART_UPDATED: { code: 200, message: 'Cart updated successfully.' },
  ORDER_PLACED: { code: 201, message: 'Order placed successfully.' },
  PAYMENT_SUCCESS: {
    code: 200,
    message: 'Payment processed successfully.',
  },
  PAYMENT_FAILED: { code: 402, message: 'Payment failed.' },
  UNAUTHORIZED: { code: 401, message: 'Unauthorized access.' },
  FORBIDDEN: { code: 403, message: 'Forbidden.' },
  NOT_FOUND: { code: 404, message: 'Resource not found.' },
  SERVER_ERROR: { code: 500, message: 'Internal server error.' },
  BAD_REQUEST: { code: 400, message: 'Bad request.' },
  VALIDATION_ERROR: { code: 422, message: 'Validation error.' },
  ALREADY_EXISTS: { code: 409, message: 'Resource already exists.' },
  INSUFFICIENT_STOCK: {
    code: 409,
    message: 'Insufficient stock for product.',
  },
  OUT_OF_STOCK: { code: 409, message: 'Product is out of stock.' },
};

module.exports = {
  STATUS_MESSAGES,
};
