const joi = require('joi');

const registerSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
});

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

const updateProfileSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
});

const deleteProfileSchema = joi.object({
    password: joi.string().required(),
});

module.exports = {
    registerSchema,
    loginSchema,
    updateProfileSchema,
    deleteProfileSchema,
};





