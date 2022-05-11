import {RegisterMessage} from '../constants.js';

export default (store) => (
  async (req, res, next) => {
    const {username} = req.body;

    if (store.findByEmail(username)) {
      res.render('register', {errorsMessages: [RegisterMessage.USER_ALREADY_REGISTER]});
      return;
    }

    next();
  }
);
