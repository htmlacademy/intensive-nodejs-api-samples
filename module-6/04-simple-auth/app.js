import express from 'express';
import expressSession from 'express-session';
import router from './routes/app-router.js';

const PORT = 4000;
const SECRET = 'keks31337';

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(expressSession({
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  name: 'session_id',
}));

app.use(express.urlencoded({extended: false}));

app.use('/', router);

app.listen(PORT);
