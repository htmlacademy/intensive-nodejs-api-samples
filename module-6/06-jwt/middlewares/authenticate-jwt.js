import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status-codes';
import {JWT_ACCESS_SECRET} from '../constants.js';

export default (req, res, next) => {
  const authorization = req.headers['authorization'];

  if (!authorization) {
    return res.sendStatus(HttpStatus.UNAUTHORIZED);
  }

  const [, token] = authorization.split(' ');

  if (!token) {
    return res.sendStatus(HttpStatus.UNAUTHORIZED);
  }

  jwt.verify(token, JWT_ACCESS_SECRET, (err, userData) => {
    if (err) {
      return res.sendStatus(HttpStatus.FORBIDDEN);
    }

    // Что-то можно делать с данными из `userData`.
    // Например сохранить res.locals для дальнейшего использования
    next();
  });
};
