import {Router} from 'express';
import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status-codes';
import storeService from '../services/store-service.js';
import refreshTokenService from '../services/refresh-token-service.js';
import authenticate from '../middlewares/authenticate.js';
import authenticateJwt from '../middlewares/authenticate-jwt.js';
import {makeTokens} from '../jwt-helper.js';
import {JWT_REFRESH_SECRET} from '../constants.js';

const userRouter = new Router();

userRouter.post('/login', authenticate(storeService), async (req, res) => {
  const {id} = res.locals.user;
  const {accessToken, refreshToken}  = makeTokens({id});

  await refreshTokenService.add(refreshToken);

  res.json({accessToken, refreshToken});
});

userRouter.post('/refresh', async (req, res) => {
  const {token} = req.body;

  if (!token) {
    return res.sendStatus(HttpStatus.BAD_REQUEST);
  }

  const existToken = await refreshTokenService.find(token);

  if (!existToken) {
    return res.sendStatus(HttpStatus.NOT_FOUND);
  }

  jwt.verify(token, JWT_REFRESH_SECRET, async (err, userData) => {
    if (err) {
      return res.sendStatus(HttpStatus.FORBIDDEN);
    }

    const {id} = userData;
    const {accessToken, refreshToken}  = makeTokens({id});

    await refreshTokenService.drop(existToken);
    await refreshTokenService.add(refreshToken);

    res.json({accessToken, refreshToken});
  });
});

userRouter.delete('/logout', authenticateJwt, (req, res) => {
  const {token} = req.body;

  refreshTokenService.drop(token);

  res.sendStatus(HttpStatus.NO_CONTENT);
});

export default userRouter;
