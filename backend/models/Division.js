// Division.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const divisionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Division = mongoose.model('Division', divisionSchema);

module.exports = Division;
