const http = require('http');
const app = require('./app');

const PORT = 5001;
const HOST = 'localhost';

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
  console.log(`Lucky start at http://${HOST}:${PORT}`);
});
