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
        throw new Error("JWT_SECRET is not defined");
    }

    return jwt.sign(payload, secret, { expiresIn });
};

module.exports = generateToken;
