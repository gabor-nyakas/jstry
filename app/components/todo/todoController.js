import express from 'express';
import { findAll, create } from './todoService.js';

export default app => {
  var router = express.Router();

  const todoURL = '/todo';

  // Retrieve all Tutorials
  router.get(`${todoURL}`, findAll);
  router.post(`${todoURL}`, create);

  app.use('/api/', router);
};
