import jwt from 'jsonwebtoken';
import {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET} from './constants.js';

export const makeTokens = (tokenData) => {
  const accessToken = jwt.sign(tokenData, JWT_ACCESS_SECRET,  {expiresIn: '50s'});
  const refreshToken = jwt.sign(tokenData, JWT_REFRESH_SECRET);

  return {accessToken, refreshToken};
};
