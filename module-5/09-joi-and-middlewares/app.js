import express from 'express';
import bookValidatorMiddleware from './book-validator-middleware.js';
import bookSchema from './book-schema.js';

const app = express();
app.use(express.json());

const port = 3000;

app.post('/book', bookValidatorMiddleware(bookSchema), async (req, res) => {
  const { body } = req;
  res.json({
    message: 'A new book created.',
    data: body,
  });
});

app.listen(port);
