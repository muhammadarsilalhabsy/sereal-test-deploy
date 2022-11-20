const mongoose = require('mongoose');
const { Schema } = mongoose;

const gallerySchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 10,
    // maxLength: 100,
  },
  author: {
    type: String,
    required: true,
    minLength: 3,
    // maxLength: 100,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
    // maxLength: 1000,
  },
  content: {
    image: {
      type: String,
    },
    video: {
      type: String,
    },
  },
  categories: [
    {
      type: mongoose.ObjectId,
      ref: 'Categories',
      required: true,
    },
  ],
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
