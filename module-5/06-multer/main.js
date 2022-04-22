import path from 'path';
import {fileURLToPath} from 'url';
import express from 'express';

// импортируем multer
import multer from 'multer';

const app = express();

// инициализируем хранилище
const diskStorage = multer.diskStorage({
  destination: function (_req, file, cb) {
    const imageExtensions = ['.jpg', '.png', '.svg'];
    const extension = path.extname(file.originalname);
    const uploadPath = (imageExtensions.includes(extension)) ? 'upload/images' : 'upload';
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    // лучше это делать с помощью специальной библиотеки, но для примера сойдёт и так
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const extension = path.extname(file.originalname);
    console.log(extension);
    cb(null, `${uniqueName}.${extension}`);
  },
});
// инициализируем middleware
const upload = multer({ storage: diskStorage });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'upload/images')));

// добавляем middleware в цепочку обработчиков
app.post('/', upload.single('avatar'), (req, res) => {
  console.log(req.file);
  res.send('OK');
});

app.listen(8080);
