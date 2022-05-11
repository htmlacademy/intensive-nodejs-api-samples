import Joi from 'joi';
import {LoginMessage} from '../constants.js';

export default Joi.object({
  username: Joi.string()
    .required()
    .email()
    .messages({
      'string.email': LoginMessage.WRONG_EMAIL,
      'any.required': LoginMessage.REQUIRED_FIELD,
    }),

  password: Joi.string()
    .required()
    .messages({
      'any.required': LoginMessage.REQUIRED_FIELD,
    }),
});
