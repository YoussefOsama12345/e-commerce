
const cloudinary = require('../config/cloudinary');

const uploadMedia = async (file) => {
  if (!file || !file.path) {
    throw new Error('File is missing or invalid');
  }

  const result = await cloudinary.uploader.upload(file.path, {
    resource_type: 'auto',
    folder: 'e-commerce/media',
  });

  return result;
};

module.exports = { uploadMedia };
