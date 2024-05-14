// Division.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const divisionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 250
  },
  keywords: [String] // Array of keywords associated with the division
});

const Division = mongoose.model('Division', divisionSchema);

module.exports = Division;
