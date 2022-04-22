import {Router} from 'express';

const newsRouter = new Router();

newsRouter.get('/', (_req, res) => res.send('/news'));
newsRouter.get('/general', (_req, res) => res.send('/news/general'));
newsRouter.get('/:id', (req, res) => res.send(`/news/:id ${req.params.id}`));

export default newsRouter;
