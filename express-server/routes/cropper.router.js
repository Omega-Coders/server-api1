const express = require('express');

const { postCropperDetails, getCropperDetails, getTemplateImage, postTemplateImage } = require('../controllers/cropper.controller');

const cropperRouter = express.Router();

cropperRouter.post('/cropper/add-details', postCropperDetails);

cropperRouter.get('/cropper/get-details', getCropperDetails);

cropperRouter.get('/cropper/get-template-image', getTemplateImage);



cropperRouter.post('/cropper/add-template-image', postTemplateImage);

module.exports = cropperRouter;




