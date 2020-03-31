module.exports = app => {
  const todoService = require('../services/todo.service.js');

  var router = require('express').Router();

  const todoURL = '/todo';

  // Retrieve all Tutorials
  router.get(`${todoURL}`, todoService.findAll);

  app.use('/api/', router);
};
