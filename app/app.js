const http = require('http');
const version = process.env.APP_VERSION || "dev";

http.createServer((req, res) => {
  res.end(`App Version: ${version}`);
}).listen(8080);

