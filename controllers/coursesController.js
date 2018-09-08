// TODO: Determine what needs to be populated
const Course = require('../models/course');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
let token;
let currentUserId;

function getUserIdFromToken(req) {
  token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, secret, (err, result) => {
    err ? console.log(err) : currentUserId = result.sub;
  });
}



function coursesIndex(req, res, next) {
  Course.find()
    .populate('createdBy')
    .then(courses => res.json(courses))
    .catch(next);
}

function coursesShow(req, res, next) {
  Course.findById(req.params.courseId)
    .populate('createdBy pages')
    .then(course => res.json(course))
    .catch(next);
}

function coursesCreate(req, res, next) {
  getUserIdFromToken(req);
  // Do I need some error handling here? Is it necessary if this is a secure route?
  let courseId;
  Course.create(req.body)
    .then(course => {
      courseId = course._id;
      course.createdBy = currentUserId;
      return course.save();
    })
    .then(() => User.findById(currentUserId))
    .then(user => {
      user.coursesCreated.push(courseId);
      return user.save();
    })
    .then(() => Course.findById(courseId))
    .then(course => res.json(course))
    .catch(next);
}

function coursesUpdate(req, res, next) {
  Course.findById(req.params.courseId)
    .then(course => course.set(req.body))
    .then(course => course.save())
    .then(course => res.json(course))
    .catch(next);
}

function coursesDelete(req, res, next) {
  getUserIdFromToken(req);
  const courseId = req.params.courseId;
  Course.findById(courseId)
    .then(course => course.remove())
    .then(() => User.findById(currentUserId))
    .then(user => {
      user.coursesCreated = user.coursesCreated.filter(course => course.toString() !== courseId);
      return user.save();
    })
    .then(() => res.sendStatus(204)) // No content
    .catch(next);
}


module.exports = {
  index: coursesIndex,
  show: coursesShow,
  create: coursesCreate,
  update: coursesUpdate,
  delete: coursesDelete
};
