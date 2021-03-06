const color = require('node-colorify');
const mongojs = require('mongojs');
const util = require('../src/utilities');

/**
 * A collection of documents in the mongo database.
 */
const documents = ['Users'];

const db = mongojs('mongodb://localhost:27017/LunchLearn', documents);

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
 * Gets a complete list of Users sorted by last name.
 * @param {object} req The request object to send to the REST endpoint.
 * @param {object} res The response object from the REST endpoint.
 * @param {function} next A callback to proclaim to the endpoint that the response has been received.
 */
svc.getAllUsers = (req, res, next) => {
  docs.Users.find().sort({ 'lastName': 1 }, (err, docs) => {
    if (err) {
      res.send(503, err);
    } else {
      res.json(200, docs);
    }

    return next();
  });
};

/**
 * Gets a single user by identifier.
 */
svc.getUserById = (req, res, next) => {
  if (!req.params.id) {
    res.send(404, { 'message': 'An id is required.' });
    return next();
  }

  docs.Users.findOne({ '_id': mongojs.ObjectId(req.params.id) }, (err, doc) => {
    if (err) {
      res.send(503, err);
    } else {
      res.json(200, doc);
    }
  });

  return next();
};

/**
 * Adds a new User to the User document.
 */
svc.addUser = (req, res, next) => {
  if (!req.body) {
    res.send(404, { 'message': 'User object is required.' });
    return next();
  }

  docs.Users.save(req.body, (err, saved) => {
    if (err) {
      res.send(503, err);
    } else {
      res.json(200, { message: 'User created!', data: saved });
    }
    return next();
  });
};

/**
 * Deletes a single User by ID.
 */
svc.deleteUser = (req, res, next) => {
  if (!req.params.id) {
    res.send(404, 'An id is required.');
    return next();
  }

  docs.Users.remove({ '_id': mongojs.ObjectId(req.params.id) }, true, (err, deleted) => {
    if (err) {
      res.send(503, err);
    } else {
      res.json(200, {message: 'User deleted', data: deleted});
    }

    return next();
  });
};

/**
 * Updates a single User object by ID.
 */
svc.updateUser = (req, res, next) => {
  if (!req.body || !req.params.id) {
    res.send(404, 'A user object is required.');
    return next();
  }

  delete req.body._id;
  docs.Users.findAndModify({
    'query': { '_id': mongojs.ObjectId(req.params.id) },
    'update': { '$set': req.body }
  }, (err, edited) => {
    if (err) {
      res.send(503, err);
    } else {
      res.json(200, { message: 'User updated', data: edited });
    }
  });

  return next();
};

/**
 * Export the object for use in index.js.
 */
module.exports = svc;
