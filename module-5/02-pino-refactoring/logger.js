import pino from 'pino';

export const logger = pino({
  name: 'pino-and-express',
  level: process.env.LOG_LEVEL || 'info',
});

export const getLogger = (options = {}) => {
  return logger.child(options);
};
