var http = require('http'),
	url = require('url'),
	path = require('path'),
	fs = require('fs'),
	faye = require('faye');

// http server
var server = http.createServer( function(request, response) {

	var uri = url.parse(request.url).pathname;
	console.log('GET '+uri);
    var filename = path.join(process.cwd()+'/'+process.argv[2]+'/', uri);
	console.log('file: '+filename);	  

	path.exists(filename, function(exists) {
    	if(!exists) {
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write("404 Not Found\n");
			response.end();
			return;
		}

		if (fs.statSync(filename).isDirectory()) { 
			filename += '/index.html';
		}
	
		fs.readFile(filename, function(error, data) {
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
});

// bayeux handler
var bayeux = new faye.NodeAdapter({ 
	mount: '/bayeuxhandler', 
	timeout: 45
});
bayeux.attach(server);

server.listen(8000);
