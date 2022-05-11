import {Router} from 'express';
import authenticateJwt from '../middlewares/authenticate-jwt.js';
import bookMocks from '../mocks/books.js';

const booksRouter = new Router();

booksRouter.get('/books', authenticateJwt, (req, res) => {
  res.json(bookMocks);
});

export default booksRouter;
