import type { IncomingMessage, ServerResponse } from 'node:http';
import { simulator } from './api/routes/game';

const routes = {
  '/jogo/simular:get': simulator,
  default: (_: IncomingMessage, response: ServerResponse) => {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end();
  },
};

export default routes;
