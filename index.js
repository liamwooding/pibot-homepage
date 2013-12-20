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

// Define the routes
server.route({
    method: 'GET',
    path: '/index',
    handler: {
        file: {
            path: './index.html'
        }
    }
});

// Define the routes
server.route({
    method: 'GET',
    path: '/kit',
    handler: {
        file: {
            path: './kit.html'
        }
    }
});

// Define the routes
server.route({
    method: 'GET',
    path: '/workshop',
    handler: {
        file: {
            path: './workshop.html'
        }
    }
});

// Define the routes
server.route({
    method: 'GET',
    path: '/pioneer',
    handler: {
        file: {
            path: './pioneer.html'
        }
    }
});

// Define the routes
server.route({
    method: 'GET',
    path: '/contact',
    handler: {
        file: {
            path: './contact.html'
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
