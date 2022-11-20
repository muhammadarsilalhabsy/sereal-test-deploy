const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  nama: {
    type: String,
    required: true,
    minLength: 3,
  },
});

const Categories = mongoose.model('Categories', categoriesSchema);
module.exports = Categories;
