import debug from 'debug';

const log = debug('app:start-request');

export const startRequest = (req, _res, next) => {
  log(`Start request to url ${req.url}`);
  next();
};
