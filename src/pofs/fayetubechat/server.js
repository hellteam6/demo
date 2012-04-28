var http = require('http'),
	fs = require('fs'),
	faye = require('faye');

// http server
var server = http.createServer( function(request, response) {
	fs.readFile('index.html', function(error, data) {
		if(error) {
			response.writeHead(500);
			response.end();
		} else {
			response.writeHead(200, {'Content-Type': 'text/html'} );
			response.write(data);
			response.end();
		}
	});
});

// bayeux handler
var bayeux = new faye.NodeAdapter({ 
	mount: '/bayeuxhandler', 
	timeout: 45
});
bayeux.attach(server);

server.listen(8000);
