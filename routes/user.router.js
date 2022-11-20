const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  updateUserByID2,
  deleteUserByID
} = require("../controllers/user.controller");

router.get('/', getAllUser);
router.get('/:id', getUserByID);
router.put('/:id', updateUserByID2);
router.delete('/:id', deleteUserByID);

module.exports = router;