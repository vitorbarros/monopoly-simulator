import type { IncomingMessage, ServerResponse } from 'node:http';
import { parse } from 'node:url';
import logger from './utils/logger';
import routes from './routes';

const handler = (req: IncomingMessage, res: ServerResponse) => {
  const { url, method } = req;
  const { pathname } = parse(url, true);

  const route = `${pathname}:${method.toLowerCase()}`;

  const chosenRoute = routes[route] || routes.default;

  logger.log('api', route);

  return chosenRoute(req, res);
};

export default handler;
