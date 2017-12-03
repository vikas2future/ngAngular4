const color = require('node-colorify');
const util = require('../src/utilities');

/**
 * A collection of documents in the mongo database.
 */
const documents = ['Users'];

/**
 * Setting up a connection to the mlab.com database.  Username & password included in the string.  Totally secure.  Lol
 */
const db = require('mongojs')('mongodb://learner:reuters909@ds119446.mlab.com:19446/lunchlearn', documents);

/**
 * MongoDB connection error handling.
 */
db.on('error', err => {
  if (err) {
    util.log(`An error occurred white attempting to connect to the database.  Error: ${err}`, util.TYPES.ERROR);
  }
});

/**
 * An object of documents from MongoDB.
 */
const docs = {
    'Users': db.collection('Users')
};

const svc = {};


/**
 * Gets a complete list of Users.
 * @param {object} req The request object to send to the REST endpoint.
 * @param {object} res The response object from the REST endpoint.
 * @param {function} next A callback to proclaim to the endpoint that the response has been received.
 */
svc.getAllUsers = (req, res, next) => {
  util.log(req);

  docs.Users.find((err, docs) => {
    if (err) {
      util.log(`An error occurred while attempting to query route "/users/" on ${new Date()}.`, util.TYPES.ERROR);

      res.send(503, err);
    } else {
      util.log(`Successful call made for route "/users/" on ${new Date()}.`, util.TYPES.SUCCESS);

      res.json(200, docs);
    }

    return next();
  });
};

/**
 * Export the object for use in index.js.
 */
module.exports = svc;
