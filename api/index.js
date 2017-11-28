const restify = require('restify');
const fs = require("fs");
const mockData = require("./mockdata.json");

const server = restify.createServer();

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

server.get("users/", getAllUsers);

server.listen(3050, '127.0.0.1', function () {
  console.log('%s listening at %s', server.name, server.url);
});

function getAllUsers(req, res, next) {
  res.json(200, mockData.users);
  next();
}
