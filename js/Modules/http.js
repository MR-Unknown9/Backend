const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Welcome to our home page!");
  } else if (req.url === '/about') {
    res.end("this is the about page!");
  } else {
    res.end("oh no! sorry we cant load this page!");
  }
});

server.listen(5000);
