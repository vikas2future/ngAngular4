const restify = require('restify');
const color = require('node-colorify');
const util = require('../src/utilities');

const server = restify.createServer();

const routes = require('../src/routes');

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

/**
  * Middleware
  */
server.use(restify.plugins.jsonBodyParser({ mapParams: true }));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.fullResponse());

/**
 *********************************************************************************
 * Add Routes here.  The implementation for each route is in the routes.js folder.
 *********************************************************************************
 */
server.get('users/', routes.getAllUsers);
server.get('user/:id', routes.getUserById);
server.post('user/', routes.addUser);
server.put('user/:id', routes.updateUser);
server.del('user/:id', routes.deleteUser);

/**
 * REST service error handling.
 */
server.use((err, req, res, next) => {
  if (!err) {
    return next();
  }

  util.log(err.stack || err.message, util.TYPES.ERROR);

  return next(err);
});

/**
 * Starts up the REST server.  This one sets up url "http://localhost:3050/".
 */
server.listen(3050, '127.0.0.1', () => {
  util.log(`REST server running at ${server.url}`, util.TYPES.SUCCESS);
});

module.exports = server;
