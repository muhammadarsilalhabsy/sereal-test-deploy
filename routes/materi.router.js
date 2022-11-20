const express = require("express");
const router = express.Router();
const authorize = require('../middleware/authorize')

const {
  getAllMateri,
  getMateriByID,
  addMateri,
  updateMateriByID,
  deleteMateriByID,
} = require("../controllers/materi.controller");

router.get("/", getAllMateri);
router.get("/:id", getMateriByID);
router.post("/", authorize, addMateri);
router.put("/:id", authorize, updateMateriByID);
router.delete("/:id", authorize, deleteMateriByID);

module.exports = router;