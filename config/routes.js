const express = require('express');
const Router = express.Router();
const authController = require('../controllers/authController');
const coursesController = require('../controllers/coursesController')

// Homepage - Login and Register will be on this page
Router.route('/')
  .get(function(req, res) {
    res.send('Welcome!');
  });

// Register
Router.route('/register')
  .post(authController.register);

// Login
Router.route('/login')
  .post(authController.login);

Router.route('/courses')
  .get(coursesController.index)
  .post(coursesController.create);

module.exports = Router;
