const { Sequelize } = require('sequelize');
const { DEVELOPMENT_ENV } = require('./env');

const config = DEVELOPMENT_ENV;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    dialectOptions: config.dialectOptions,
    logging: false,
  }
);

module.exports = sequelize;
