import express from 'express';
import { PORT, ENV } from './app/config/server.config.js';

import todoController from './app/controllers/todo.controller.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello Mr. API server!!' });
});

todoController(app);

const callback = () => {
  console.log(`\tApp is running at http://localhost:${PORT} in ${ENV} mode`);
  console.log('\tPress CTRL-C to stop\n');
};

app.listen(PORT, callback);
