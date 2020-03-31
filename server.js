const express = require('express');
const serverConfig = require('./app/config/server.config');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello Mr. API server!!' });
});

require('./app/controllers/todo.controller')(app);

const callback = () => {
  console.log(`\tApp is running at http://localhost:${serverConfig.PORT} in ${serverConfig.ENV} mode`);
  console.log('\tPress CTRL-C to stop\n');
};

app.listen(serverConfig.PORT, callback);
