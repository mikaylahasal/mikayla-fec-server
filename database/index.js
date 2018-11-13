const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;

const db = mongoose.connect(mongoUri);

module.exports = db;