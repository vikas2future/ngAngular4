const mockData = require('../src/entries-mockdata.json');

const svc = {};

svc.getAllUsers = (req, res, next) => {
  res.json(200, mockData);
  next();
};

module.exports = svc;
