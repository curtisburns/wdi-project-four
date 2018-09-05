// TODO: Put secureRoute on after testing

const express = require('express');
const Router = express.Router();
const authController = require('../controllers/authController');
const coursesController = require('../controllers/coursesController');
const usersController = require('../controllers/usersController');

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

// Courses
Router.route('/courses')
  .get(coursesController.index)
  .post(coursesController.create);

Router.route('/courses/:courseId')
  .get(coursesController.show)
  .put(coursesController.update)
  .delete(coursesController.delete);

Router.route('users/userId')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

module.exports = Router;
