const {DEVELOPMENT_ENV} = require("../config/env");
const bcrypt = require("bcrypt");

const hashPassword = async (plainPassword) => {
    const salt = await bcrypt.genSalt(DEVELOPMENT_ENV.saltRounds);
    return await bcrypt.hash(plainPassword, salt);
};

const comparePassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

module.exports = {
    hashPassword,
    comparePassword
};