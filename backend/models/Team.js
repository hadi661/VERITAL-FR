const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String
  }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
