import type { IncomingMessage, ServerResponse } from 'node:http';
import { simulate } from '../../app/services/game';

export const simulator = (_: IncomingMessage, response: ServerResponse) => {
  const simulateResponse = simulate();
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(simulateResponse));
};
