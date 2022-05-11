import express from 'express';
import './fill-store.js';
import authRouter from './routes/user-router.js';
import booksRouter from './routes/books-router.js';

const PORT = 4000;
const app = express();

app.use(express.json());

app.use('/user', authRouter);
app.use('/', booksRouter);

app.listen(PORT);
