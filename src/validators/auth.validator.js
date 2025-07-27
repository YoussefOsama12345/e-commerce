const joi = require('joi');

const registerSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required().valid(joi.ref('password')),
    phone: joi.string().required(),
    address: joi.string().required(),
    provider: joi.string().valid('google', 'facebook', 'local').optional(),
});

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};
