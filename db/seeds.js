const { dbUri } = require('../config/environment');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

// Require models
const User = require('../models/user');
const Course = require('../models/course');
// const Page = require('../models/pages');


// Seed data
const userData = [{
  username: 'curtis',
  email: 'curtis@curtis.com',
  password: 'pass',
  countryOfResidence: 'United Kingdom'
}];

const courseData = [{
  title: 'Introduction to Physics (Series) - Atomic Physics - Part One',
  subject: 'Science',
  imageUrl: 'https://media.istockphoto.com/vectors/vector-atom-icon-isolated-on-white-background-vector-id611628288?k=6&m=611628288&s=612x612&w=0&h=gzON2nbKsJBhoya-BEwWDM_y-EOwTUVdt_3GTc9fTEc=',
  description: 'This covers the basics of Atomic Physics, etc etc.'
}];

// const pageData = [{
//
// }]

// Drop collections on seed
User.collection.drop();
Course.collection.drop();
// Page.collection.drop()

User.create(userData)
  .then(users => {
    console.log(`Created ${users.length} user(s)!`);
    courseData[0].createdBy = users[0]._id;
    return Course.create(courseData);
  })
  .then(courses => console.log(`Created ${courses.length} course(s)!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
