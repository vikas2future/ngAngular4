const color = require('node-colorify');
const db = require('../src/database');

const svc = {};

svc.getAllUsers = (req, res, next) => {
  db.Users.find((err, docs) => {
    if (err) {
      console.error(
        color.colorItSync('An error occurred while attempting to query Users.', { 'fColor': 'red' })
      );
      next();
    }

    res.json(200, docs);
    next();
  });
};

module.exports = svc;
