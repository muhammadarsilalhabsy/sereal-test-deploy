const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorize')

const { getAllChallenge, getChallengeByID, createChallenge, deleteChallengeByID, updateChallengeByID } = require('../controllers/challenge.controller');

router.get('/', getAllChallenge);
router.get('/:id', getChallengeByID);
router.post('/', authorize, createChallenge);
router.delete('/:id', authorize, deleteChallengeByID);
router.patch('/:id', authorize, updateChallengeByID);

module.exports = router;
