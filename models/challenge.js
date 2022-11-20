const mongoose = require('mongoose');
const { Schema } = mongoose;

const challengeSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 10,
    // maxLength: 100,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
    // maxLength: 1000,
  },
  requirement: {
    type: String,
    required: true,
    minLength: 10,
    // maxLength: 10000,
  },
  content: {
    image: [
      {
        type: String,
        required: true,
      },
    ],
    video: {
      type: String,
      required: false,
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

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;
