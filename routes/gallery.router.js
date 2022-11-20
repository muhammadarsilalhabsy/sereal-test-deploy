const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const authorize = require('../middleware/authorize')

const { getAllGallery, getGalleryByID, createGallery, deleteGalleryByID, updateGalleryByID } = require('../controllers/gallery.controller');

router.get('/', getAllGallery);
router.get('/:id', getGalleryByID);
router.post('/', verifyToken, createGallery);
router.delete('/:id', authorize, deleteGalleryByID);
router.patch('/:id', authorize, updateGalleryByID);

module.exports = router;
