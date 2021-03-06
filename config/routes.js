const express = require('express');
const Router = express.Router();
const authController = require('../controllers/authController');
const coursesController = require('../controllers/coursesController');
const usersController = require('../controllers/usersController');
const pagesController = require('../controllers/pagesController');
const quotesController = require('../controllers/quotesController');
// const secureRoute = require('../lib/secureRoute');


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

// Pages
Router.route('/courses/:courseId/pages')
  .get(pagesController.index)
  .post(pagesController.create);

Router.route('/courses/:courseId/pages/:pageId')
  .get(pagesController.show)
  .put(pagesController.update)
  .delete(pagesController.delete);

// Users
Router.route('/users')
  .get(usersController.index);

Router.route('/users/:userId')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

// Quotes
Router.route('/quotes')
  .get(quotesController.index);

module.exports = Router;
