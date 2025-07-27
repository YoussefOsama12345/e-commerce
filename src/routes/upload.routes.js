const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload.controller');

// Routes
router.post('/uploads/upload-image',uploadController.uploadImage);
router.post('/uploads/upload-video',uploadController.uploadVideo);
router.post('/uploads/upload-audio',uploadController.uploadAudio);
router.post('/uploads/upload-file',uploadController.uploadFile);

module.exports = router;
