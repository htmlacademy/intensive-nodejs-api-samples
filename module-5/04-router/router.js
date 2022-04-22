import express from 'express';
import newsRoutes from './routes/news.js';
import companyRoutes from './routes/company.js';

const app = express();

app.use('/news', newsRoutes);
app.use('/company', companyRoutes);

const port = 3000;

app.listen(port);
