const cloudinary = require('cloudinary').v2;
const { DEVELOPMENT_ENV } = require('./env');

cloudinary.config({
  cloud_name: DEVELOPMENT_ENV.cloudinaryCloudName,
  api_key: DEVELOPMENT_ENV.cloudinaryApiKey,
  api_secret: DEVELOPMENT_ENV.cloudinaryApiSecret,
});

module.exports = cloudinary;
