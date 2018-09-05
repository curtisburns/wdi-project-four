const User = require('../models/userData');

function usersIndex(req, res, next) {
  User.find()
    .then(users => res.send(users))
    .catch(next);
}

function usersShow(req, res, next) {
  User.findById(req.params.userId)
    .then(user => res.send(user))
    .catch(next);
}

function usersCreate(req, res, next) {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next);
}

function usersUpdate(req, res, next) {
  User.findById(req.params.userId)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

function usersDelete(req, res, next) {
  User.findById(req.params.userId)
    .then(user => user.remove())
    .then(() => res.sendStatus(204)) // No content
    .catch(next);
}


module.exports = {
  index: usersIndex,
  show: usersShow,
  create: usersCreate,
  update: usersUpdate,
  delete: usersDelete
};
