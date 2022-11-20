const mongoose = require('mongoose');
const { Schema } = mongoose;

const kelasSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 10,
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

const Kelas = mongoose.model('Kelas', kelasSchema);

module.exports = Kelas;
