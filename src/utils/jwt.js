const jwt = require('jsonwebtoken');
const { DEVELOPMENT_ENV } = require('../config/env');

const jwtSecret = DEVELOPMENT_ENV.jwtSecret;

/**
 * Generate a JSON Web Token (JWT)
 *
 * @param {Object} payload - Data to encode in the token (e.g., { id, email })
 * @param {string} [expiresIn='15m'] - Token expiration duration (e.g., '15m', '1h', '7d')
 * @param {string} [secret=process.env.JWT_SECRET] - Secret key to sign the token
 * @returns {string} - Signed JWT
 */

const generateToken = (payload, expiresIn = '15m', secret = jwtSecret) => {
  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }

  return jwt.sign(payload, secret, { expiresIn });
};

/**
 * Verify a JSON Web Token (JWT)
 *
 * @param {string} token - The JWT token to verify
 * @param {string} [secret=jwtSecret] - Secret key used to sign the token
 * @returns {Object} - Decoded token payload if valid
 * @throws {Error} - If token is invalid, expired, or secret is missing
 */

const verifyToken = (token, secret = jwtSecret) => {
  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }

  if (!token) {
    throw new Error('Token is required');
  }

  try {
    return jwt.verify(token, secret);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      throw new Error('Token has expired');
    } else if (error.name === 'JsonWebTokenError') {
      throw new Error('Invalid token');
    } else {
      throw new Error('Token verification failed');
    }
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
