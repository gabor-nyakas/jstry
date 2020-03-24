import { env, port } from './config/server.config';
import express from 'express';

const app = express();

const callback = () => {
  console.log(`\tApp is running at http://localhost:${port} in ${env} mode`);
  console.log('\tPress CTRL-C to stop\n');
};

export default app.listen(port, callback);
