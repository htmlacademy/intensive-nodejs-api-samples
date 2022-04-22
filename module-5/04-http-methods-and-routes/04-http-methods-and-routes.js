import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const port = 3000;
app.listen(port);

// POST
app.post('/company', (_req, res) => res.send('OK'));

// PATCH
app.patch('/company', (_req, res) => res.send('OK'));

// PUT
app.put('/company', (_req, res) => res.send('OK'));

// DELETE
app.delete('/company', (_req, res) => res.send('OK'));

// Динамический маршрут
app.get('/company/:id/comments/:commentId', (_req, res) => res.send('OK'));

// Маршрут в виде регулярного выражения
app.get('/page[0-9]+', (_req, res) => res.send('Yes, it\'s a valid url!'));
