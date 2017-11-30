const mockData = require('../src/mockdata.json');

const svc = {};

svc.getAllUsers = (req, res, next) => {
  res.json(200, mockData.users);
  next();
};

module.exports = svc;
