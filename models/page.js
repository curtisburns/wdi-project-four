const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  templateNumber: {type: Number, required: true },
  videoUrl: String,
  imageUrl: String,
  elements: [{
    type: String,
    content: String
  }]
});

module.exports = mongoose.model('Page', pageSchema);
