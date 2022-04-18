import express from 'express';

const PORT = 3000;

const app = express();

app.use((req, _res, next) => {
  console.log(`Start request to url ${req.url}`);
  next();
});

app.get('/', (_req, res) => {
  res.send('Hello World');

  // Фиксируем успех завершения запроса
  console.log(`End request with status code ${res.statusCode}`);
});

app.use((_req, res) => {
  res.status(404).send('Page not found');

  // Фиксируем неудачу. Маршрут не зарегистрирован
  console.error(`End request with error ${res.statusCode}`);
});

app.listen(PORT, () => {
  // Регистрируем запуск сервера
  console.log(`server start on ${PORT}`);
})
  .on('error', (err) => {
    // Логируем ошибку, если сервер не смог стартовать
    console.error(`Server can't start. Error: ${err}`);
  });
