const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
  templateNumber: {type: Number, required: true },
  videoUrl: String,
  imageUrl: String,
  content: [{ type: String }]
});

module.exports = mongoose.model('Page', pageSchema);
