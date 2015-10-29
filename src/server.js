console.log(__filename);

var hapi = require('hapi');
var config = require(__dirname + '/config.json');
var routes = require(__dirname + '/app/routes');

var server = new hapi.Server();

server.connection({
  port   : config.node.port,
  routes : {
    cors : {
      origin : ['*']
    }
  }
});

server.route(routes);

server.route({
  method  : 'GET',
  path    : '/',
  config  : {
    handler : function(req, res) {
      console.log('/');
      return res('').code(200);
    }
  }
});

server.start(function() {
  console.log('\nServer running at: ' + server.info.uri);
});