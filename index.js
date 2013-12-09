var Hapi = require('hapi');

var options = {};

// Create a server with a host, port, and options
var server = Hapi.createServer('localhost', 9000, options);

// Define the routes
server.route({
    method: 'GET',
    path: '/',
    handler: {
        file: {
            path: './index.html'
        }
    }
});

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: {
            path: './'
        }
    }
});

// Start the server
server.start(function () {
  console.log('Pibot server running on port 9000');
});
