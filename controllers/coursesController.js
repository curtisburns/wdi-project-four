const Course = require('../models/course');

function coursesIndex(req, res, next) {
  Course.find()
    .then(courses => res.send(courses))
    .catch(next);
}

function coursesShow(req, res, next) {
  Course.findById(req.params.courseId)
    .then(course => res.send(course))
    .catch(next);
}

function coursesCreate(req, res, next) {
  Course.create(req.body)
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
  Course.findById(req.params.courseId)
    .then(course => course.remove())
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
