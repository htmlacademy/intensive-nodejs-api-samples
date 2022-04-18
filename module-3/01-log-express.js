import express from 'express';

const PORT = 3000;

const app = express();

app.listen(PORT);

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.use((_req, res) => {
  res.status(404).send('Page not found');
});
