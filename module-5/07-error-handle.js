import express from 'express';

const app = express();

const port = 3000;

app.listen(port);

app.get('/', () => {
  throw new Error('Oops!');
});

app.use((_err, _req, res, next) => {
  res
    .status(500)
    .send('Ой, что-то сломалось');
});
