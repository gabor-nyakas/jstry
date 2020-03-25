const express = require('express');

const app = express();

const callback = () => {
  //console.log(`\tApp is running at http://localhost:${port} in ${env} mode`);
  console.log('\tPress CTRL-C to stop\n');
};

app.listen(/*port*/ process.env.PORT || 3000, callback);
