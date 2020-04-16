import express from 'express';
import { findAll } from './todoService.js';

export default app => {
  var router = express.Router();

  const todoURL = '/todo';

  // Retrieve all Tutorials
  router.get(`${todoURL}`, findAll);

  app.use('/api/', router);
};
