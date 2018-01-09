(() => {
  const express = require('express'),
        morgan = require('morgan'),
        bodyParser = require('body-parser'),
        path = require('path');

  const app = express();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ 'extended': 'true' }));
  app.use(express.static(path.join(__dirname, '/node_modules')));

  app.use('/', (req, res) => {
    console.log(__dirname + '/src/index.html');

    res.sendFile(path.join(__dirname + '/src/', 'index.html'))
  });


  app.listen(8080);
  console.log('Web server running on port 8080.');
})();
