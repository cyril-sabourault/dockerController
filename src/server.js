var hapi = require('hapi');
var path = require('path');

var config = require('./config.json');
var routes = require('./app/routes/');
var staticRoutes = require('./app/routes/staticRoutes.js');

var server = new hapi.Server();

server.connection({
  port   : config.node.port,
  routes : {
    files : {
      relativeTo  : path.join(__dirname, '/public/dist')
    }
  }
});

var plugins = [
  {
    Inert  : require('inert')
  }
];

server.register(require('inert'), function() {});

server.route(staticRoutes);
server.route(routes);

server.start(function() {
  console.log('\nServer running at: ' + server.info.uri);
});
