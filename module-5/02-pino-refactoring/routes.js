import {Router} from 'express';
import {getLogger} from './logger.js';

const router = new Router();

const logger = getLogger();

router.get('/', (_req, res) => {
  res.send('Hello World');

  // Записываем успех завершения запроса
  logger.info(`End request with status code ${res.statusCode}`);
});

//  Регистрируем дополнительный маршрут `/about`
router.get('/about', (_req, res) => {
  res.send('About Node.js lessons');
  logger.info(`End request with status code ${res.statusCode}`);
});

export default router;
