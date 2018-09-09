const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function login(req, res, next) {
  //be sure to label the form as necessary, otherwise just stick to login in with email.
  User.findOne({ $or:
    [{ email: req.body.login }, { username: req.body.login }]
  })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorised!'});
      }
      createAndSendToken(user, res, `Welcome back ${user.username}!`);
    })
    .catch(next);
}

function register(req, res, next) {
  User.create(req.body)
    .then(user => createAndSendToken(user, res, `User (${user.username}) has successfully registered!`))
    .catch(next);
}

function createAndSendToken(user, res, message) {
  const token = jwt.sign({ sub: user._id, username: user.username }, secret, { expiresIn: '6h' });
  res.send({ token, message, user });
}

module.exports = {
  login, register
};
