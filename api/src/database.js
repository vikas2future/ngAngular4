const mongojs = require('mongojs');
const color = require('node-colorify');

const collections = ['Users'];

const db = mongojs('mongodb://lunchlearn:Reuters909!@ds119446.mlab.com:19446/lunchlearn', collections);

db.on('connect', () => {
  console.log(
    color.colorItSync('Connection to the mongo database achieved.', { 'fColor': 'green' })
  );
});

db.on('error', err => {
  if (err) {
    console.error(
      color.colorItSync(`An error occurred white attempting to connect to the database.  Error: ${err}`,
      { 'fColor': 'red' })
    );
  }
});

module.exports = db;
