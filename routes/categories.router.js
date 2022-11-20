const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorize')
const { getAllCategories, getCategoriesByID, createCategories, deleteCategoriesByID, updateCategoriesByID } = require('../controllers/categories.controller');

router.get('/', getAllCategories);
router.get('/:id', getCategoriesByID);
router.post('/', authorize, createCategories);
router.delete('/:id', authorize, deleteCategoriesByID);
router.patch('/:id', authorize, updateCategoriesByID);

module.exports = router;
