import http from 'http';

const onClientConnect = (request, response) => {
  const userAgent = request.headers['user-agent'];
  response.end(`Hello, ${userAgent}!`);
};

const port = 8000;
const httpServer = http.createServer(onClientConnect);

httpServer.on('listening', () => console.log(`Принимаю подключения на ${port}`));
httpServer.on('connection', ({remoteAddress}) => console.log(`Подключился новый клиент: ${remoteAddress}`));
httpServer.listen(port);
