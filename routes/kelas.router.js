const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const authorize = require('../middleware/authorize');

const { getAllKelas, getKelasByID, createKelas, deleteKelasByID, updateKelasByID } = require('../controllers/kelas.controller');

router.get('/', getAllKelas);
router.get('/:id', getKelasByID);
router.post('/', verifyToken, createKelas);
router.delete('/:id', authorize, deleteKelasByID);
router.patch('/:id', authorize, updateKelasByID);

module.exports = router;
