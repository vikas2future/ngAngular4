const restify = require('restify');
const route = require('./routes');

const server = restify.createServer();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

// routes
server.get("users/", route.getAllUsers);

server.listen(3050, '127.0.0.1', function () {
  console.log('%s listening at %s', server.name, server.url);
});
