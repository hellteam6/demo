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

// content types
function getContentType(filename) {
	var type = '';
	switch(filename.match(/\.(.*?)$/)[1]) { 
		case "html":
		case "htm":
			type = "text/html";
			break;
		case "css":
			type = "text/css";
			break;
		case "ico":
			type = "image/x-icon";
			break;
		default:
			type = "text/plain";	
	}
	return type;	
}

// http server
var server = http.createServer( function(request, response) {

	var uri = url.parse(request.url).pathname;
	var filename = rewrite(uri);
	var contentType = getContentType(filename);

	console.log("[*] HTTP GET \"%s\"", uri);
	console.log("[*] serving file: \"%s\" with content type \"%s\".", filename, contentType);	  

	fs.readFile(filename, function(error, data) {
		if(error) {
			if(error.errno === 34) {
				response.statusCode = 404;
				console.log("[!] HTTP ERROR 404");
			} else {
				response.statusCode = 500;
				console.log("[!] HTTP ERROR 500");
			}
			response.end();
		} else {
			fs.stat(filename, function(error, stat) {
				if(error) {
					response.statusCode = 500;
					console.log("[!] HTTP ERROR 500");
					response.end();
				} else {
					etag = stat.size + '-' + Date.parse(stat.mtime);
					response.setHeader('Last-Modified', stat.mtime);

					if(request.headers['if-none-match'] === etag) {
						response.statusCode = 304;
						console.log("[*] HTTP Not modified 304");
						response.end();
					} else {
						response.setHeader('Content-Length', data.length);
						response.setHeader('Content-Type', contentType);
						response.setHeader('ETag', etag);
						response.statusCode = 200;
						response.write(data);
						response.end();
					}
				}
			});
		}
	});
});

// bayeux handler
var bayeux = new faye.NodeAdapter({ 
	mount: '/bayeuxhandler', 
	timeout: 45
});
// bayeux monitoring
bayeux.bind('handshake', function(clientId) {
	console.log("[*] ######## bayeux: client \"%s\" connected.", clientId);
});
bayeux.bind('subscribe', function(clientId, channel) {
	console.log("[*] ######## bayeux: client \"%s\" subscribed to channel: \"%s\".", clientId, channel);
});
bayeux.bind('unsubscribe', function(clientId, channel) {
	console.log("[*] ######## bayeux: client \"%s\" unsubscribed from channel: \"%s\".", clientId, channel);
});
bayeux.bind('publish', function(clientId, channel, data) {
	console.log("[*] ######## bayeux: client \"%s\" sent event to channel: \"%s\":", clientId, channel);
	console.log("          %j", data);
});
bayeux.bind('disconnect', function(clientId) {
	console.log("[*] ######## bayeux: client \"%s\" disconnected.", clientId);
});
bayeux.attach(server);
console.log("[*] Faye attached to server.");



server.listen(8000);
console.log("[*] Server listening on port 8000.");
