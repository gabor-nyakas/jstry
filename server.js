const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello Mr. API server! :)' });
});

const callback = () => {
  //console.log(`\tApp is running at http://localhost:${port} in ${env} mode`);
  console.log('\tPress CTRL-C to stop\n');
};

app.listen(/*port*/ process.env.PORT || 3000, callback);
