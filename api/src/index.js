const server = require('restify').createServer();
const color = require('node-colorify');
const util = require('../src/utilities');

/**
 * All queries to the database are done here and returned to the routes below.
 */
const routes = require('../src/routes');

/**
 *********************************************************************************
 * Add Routes here.  The implementation for each route is in the routes.js folder.
 *********************************************************************************
 */
server.get('users/', routes.getAllUsers);

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
