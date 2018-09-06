const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  // Course specific
  title: { type: String, required: String },
  subject: { type: String, required: String },
  imageUrl: { type: String, required: String },
  description: { type: String, required: String },
  pages: [{ type: mongoose.Schema.ObjectId, ref: 'Page' }],

  // User specific
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  enrolled: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  completedCourse: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  starRating: Number,
  comments: [{
    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
    content: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
