import * as http from 'node:http';
import handler from './handler';

const port = process.env.PORT || 9999;

const startServer = () => {
  const server = http.createServer(handler);
  server.listen(port, () => console.log(`server is running on port ${port}`));
};

export default startServer;
