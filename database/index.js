const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const instructorSchema = new mongoose.Schema({
  imageUrl: String,
  name: String,
  headline: String,
  body: String,
  rating: Number,
  ratingIcon: String,
  numofstudents: Number,
  studentsIcon: String,
  numOfCourses: Number,
  courseIcon: String
});