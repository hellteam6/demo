var http = require('http'),
	url = require('url'),
	path = require('path'),
	fs = require('fs'),
	faye = require('faye');

// url rewrites
function rewrite(uri) {
	var result = process.cwd();
	var res = uri.match(/\/dojo\/(.*?)$/);
	if(res != null) {
		result = path.join(result,"../libs/dojo/"+res[1]);
	} else {
		result = path.join(process.cwd(),process.argv[2])
		result = path.join(result,uri);

		if(result.match(/\/$/)) {
			result = path.join(result,"index.html");
		}
	}
	return result;
}

// http server
var server = http.createServer( function(request, response) {

	var uri = url.parse(request.url).pathname;
	var filename = rewrite(uri);

	console.log("[*] HTTP GET \""+uri+"\"");
	console.log("[*] serving file: \""+filename+"\"");	  

	path.exists(filename, function(exists) {
    	if(!exists) {
			console.log("[!] HTTP 404: \""+filename+"\"");
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write("404 Not Found\n");
			response.end();
			return;
		}

		fs.readFile(filename, function(error, data) {
			if(error) {
				console.log("[!] HTTP 500: \""+error+"\"");
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

// Monitoring
bayeux.bind('handshake', function(clientId) {
	console.log("[*] bayeux: client \"%s\" connected.", clientId);
});
bayeux.bind('subscribe', function(clientId, channel) {
	console.log("[*] bayeux: client \"%s\" subscribed to channel: \"%s\".", clientId, channel);
});
bayeux.bind('unsubscribe', function(clientId, channel) {
	console.log("[*] bayeux: client \"%s\" unsubscribed from channel: \"%s\".", clientId, channel);
});
bayeux.bind('publish', function(clientId, channel, data) {
	console.log("[*] bayeux: client \"%s\" sent event to channel: \"%s\":", clientId, channel);
	console.log("          %j", data);
});
bayeux.bind('disconnect', function(clientId) {
	console.log("[*] bayeux: client \"%s\" disconnected.", clientId);
});


bayeux.attach(server);
console.log("[*] Faye attached to server.");

server.listen(8000);
console.log("[*] Server listening on port 8000.");
