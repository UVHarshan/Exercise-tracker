const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating a new database Schema
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
}, {
  timestamps: true,
});

// creating the mongoose model
const Exercise = mongoose.model('Exercise', exerciseSchema);

// Exporting the Schema
module.exports = Exercise;