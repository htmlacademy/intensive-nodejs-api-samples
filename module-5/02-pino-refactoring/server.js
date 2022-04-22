import express from 'express';
import router from './routes.js';
import {getLogger} from './logger.js';

const PORT = 3000;

const app = express();

const logger = getLogger();

app.use((req, _res, next) => {
  logger.info(`Start request to url ${req.url}`);
  next();
});

app.use(router);

app.use((_req, res) => {
  res.status(404).send('Page not found');

  // Записываем, что запрос закончился неудачей
  logger.error(`End request with error ${res.statusCode}`);
});

app.listen(PORT, () => {

  // Регистрируем запуск сервера
  logger.info(`server start on ${PORT}`);
}).on('error', (err) => {

  // Логируем ошибку, если сервер не смог стартовать
  logger.error(`Server can't start. Error: ${err}`);
});
