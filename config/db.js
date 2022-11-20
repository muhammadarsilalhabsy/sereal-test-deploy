const mongoose = require('mongoose');
require('dotenv').config();

// use this to connect local mongodb service
// const DB_URL = 'mongodb://127.0.0.1:27017/tpa-5'
const db = mongoose.connect(process.env.DB_URI);
module.exports = db;
