const Kelas = require('../models/kelas');
const mongoose = require('mongoose');
// get:
const getAllKelas = async (req, res) => {
  try {
    const kelas = await Kelas.find({}, '-__v');

    res.status(200).json({
      message: 'Success get all kelas',
      data: kelas,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// get:id
const getKelasByID = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'No data for this kelas' });
    const kelas = await Kelas.findOne({ _id: id });
    res.status(200).json({
      message: `Get kelas with id ${id} success`,
      data: kelas,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// post
const createKelas = (req, res) => {
  const data = req.body;

  const kelas = new Kelas(data);
  kelas.save(function (err) {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(201).json({
        message: 'Kelas has been created',
      });
    }
  });
};

// delete:id
const deleteKelasByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ msg: 'No data for this kelas' });

    await kelas.deleteOne({ _id: id });
    res.status(200).send({ message: 'Success delete kelas' });
  } catch (error) {
    res.status(404);
    res.send({ error: "Kelas doesn't exist!", message: error.message });
  }
};

// update:id
const updateKelasByID = async (req, res) => {
  const { id } = req.params;
  const { name, categories, status } = req.body;
  try {
    const kelas = await Kelas.findOne({ _id: id });

    if (name) kelas.name = name;

    for (let items in categories) {
      if (categories[items]) kelas.categories[items] = categories[items];
    }

    if (status != undefined && typeof status == 'boolean') status ? (kelas.status = true) : (kelas.status = false);

    await kelas.save();

    res.json({
      message: 'Success update kelas',
      data: kelas,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Server Error',
      error: error.message,
    });
  }
};

module.exports = {
  getAllKelas,
  getKelasByID,
  createKelas,
  deleteKelasByID,
  updateKelasByID,
};
