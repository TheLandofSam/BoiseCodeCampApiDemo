require('./models');
var restify = require('restify');
var port = 80;

  var server = restify.createServer({
    name: 'Boise Code Camp Demo',
    version: '1.0.0'
  });

  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.bodyParser());
  server.listen(port, function () {
    console.log('%s listening at %s', server.name, server.url);
  });

module.exports = server;
var routes = require('./routes');
