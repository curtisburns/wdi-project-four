const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  content: { type: String, required: String },
  by: { type: String, required: String }
});

module.exports = mongoose.model('Quote', quoteSchema);
