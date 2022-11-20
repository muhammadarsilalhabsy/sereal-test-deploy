const Gallery = require('../models/gallery');
const mongoose = require('mongoose');
// get:
const getAllGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find({}, '-__v');

    res.status(200).json({
      message: 'Success get all gallery',
      data: gallery,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// get:id
const getGalleryByID = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'No data for this gallery' });
    const gallery = await Gallery.findOne({ _id: id });
    res.status(200).json({
      message: `Get gallery with id ${id} success`,
      data: gallery,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Server Error',
      error: error.message,
    });
  }
};

// post
const createGallery = (req, res) => {
  const data = req.body;

  const gallery = new Gallery(data);
  gallery.save(function (err) {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(201).json({
        message: 'Gallery has been created',
      });
    }
  });
};

// delete:id
const deleteGalleryByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ msg: 'No data for this gallery' });

    await Gallery.deleteOne({ _id: id });
    res.status(200).send({ message: 'Success delete gallery' });
  } catch (error) {
    res.status(404);
    res.send({ error: "Gallery doesn't exist!", message: error.message });
  }
};

// update:id
const updateGalleryByID = async (req, res) => {
  const { id } = req.params;
  const { title, description, author, content, categories, status } = req.body;
  try {
    const gallery = await Gallery.findOne({ _id: id });

    if (title) gallery.title = title;

    if (author) gallery.author = author;

    if (description) gallery.description = description;

    if (content) {
      if (content.image) gallery.content.image = content.image;

      if (content.video) gallery.content.video = content.video;
    }

    for (let items in categories) {
      if (categories[items]) gallery.categories[items] = categories[items];
    }

    if (status != undefined && typeof status == 'boolean') status ? (gallery.status = true) : (gallery.status = false);

    await gallery.save();

    res.json({
      message: 'Success update gallery',
      data: gallery,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Server Error',
      error: error.message,
    });
  }
};

module.exports = {
  getAllGallery,
  getGalleryByID,
  createGallery,
  deleteGalleryByID,
  updateGalleryByID,
};
