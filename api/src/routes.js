const mongo = require('mongojs');
const color = require('node-colorify');

const db = mongo('mongodb://lunchlearn:Reuters909!@ds119446.mlab.com:19446/lunchlearn', ['Users']);

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
