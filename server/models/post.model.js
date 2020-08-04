const mongoose = require('mongoose');

let childSchema = new mongoose.Schema({
  day: String,
  start: String,
  end: String,
  start2: String,
  end2: String,
});

let postSchema = new mongoose.Schema({
  working_days: [childSchema],
});

module.exports = mongoose.model('Post', postSchema);
