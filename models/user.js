const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  // User specific
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  countryOfResidence: { type: String, required: true },
  // Course specific
  coursesCreated: [{ type: mongoose.Schema.ObjectId, ref: 'Course'}],
  coursesTaken: [{ type: mongoose.Schema.ObjectId, ref: 'Course'}],
  currentCourse: { type: mongoose.Schema.ObjectId, ref: 'Course' },
  currentPage: { type: mongoose.Schema.ObjectId, ref: 'Page' }
});

userSchema.plugin(require('mongoose-unique-validator'));

userSchema.pre('save', function hashPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 8);
  }
  next();
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
