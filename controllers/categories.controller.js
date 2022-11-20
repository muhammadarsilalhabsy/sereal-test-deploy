const Categories = require('../models/categories');
const mongoose = require('mongoose');
// get:
const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.find({}, '-__v');

    res.status(200).json({
      message: 'Success get all challenges',
      data: categories,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// get:id
const getCategoriesByID = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'No data for this categories' });
    const categories = await Categories.findOne({ _id: id });
    res.status(200).json({
      message: `Get categories with id ${id} success`,
      data: categories,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// post
const createCategories = (req, res) => {
  const data = req.body;

  const categories = new Categories(data);
  categories.save(function (err) {
    if (err) {
      res.status(500).json({
        massage: err.message,
      });
    } else {
      res.status(201).json({
        message: 'Categories has been created',
      });
    }
  });

  // res.status(400).json({ message: error.message });
};

// delete:id
const deleteCategoriesByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ msg: 'No data for this categories' });

    await Categories.deleteOne({ _id: id });
    res.status(200).send({ massage: 'Success delete categories' });
  } catch (error) {
    res.status(404);
    res.send({ error: "Categories doesn't exist!", massage: error.massage });
  }
};

// update:id
const updateCategoriesByID = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const categories = await Categories.findOne({ _id: id });

    if (name) categories.name = name;

    await categories.save();

    res.json({
      massage: 'Success update categories',
      data: categories,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Server Error',
      error: error.message,
    });
  }
};

module.exports = {
  getAllCategories,
  getCategoriesByID,
  createCategories,
  deleteCategoriesByID,
  updateCategoriesByID,
};
