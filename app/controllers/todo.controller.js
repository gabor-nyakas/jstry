import express from 'express';
import { findAll } from '../services/todo.service.js';

export default app => {
  var router = express.Router();

  const todoURL = '/todo';

  // Retrieve all Tutorials
  router.get(`${todoURL}`, findAll);

  app.use('/api/', router);
};
