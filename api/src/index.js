
const server = require('restify').createServer();
const color = require('node-colorify');

const routes = require('../src/routes');

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});

// routes
server.get('users/', routes.getAllUsers);

server.listen(3050, '127.0.0.1', () => {
  console.log(
    color.colorItSync(`REST server running at ${server.url}`, { 'fColor': 'green' })
  );
});
