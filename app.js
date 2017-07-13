var restify = require('restify');
var port = 3000;

var server = restify.createServer({
  name: 'Boise Code Camp API Demo',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.listen(process.env.PORT || port, function () {
  console.log('%s listening at %s', server.name, server.url);
});

module.exports = server;
var routes = require('./routes');