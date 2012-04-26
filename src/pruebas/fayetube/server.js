var http = require('http'),
	fs = require('fs'),
	faye = require('faye');

var index;
fs.readFile('./index.html', function(err, data) {
	if(err) {
		throw err;
	} else {
		index = data;
	}
});

var bayeux = new faye.NodeAdapter({ 
	mount: '/fayetube', 
	timeout: 45
});

function requestHandler(request, response) {
	//console.log("Request received.");
	response.writeHead(200, {'Content-Type': 'text/html'} );
	response.write(index);
	response.end();
}

var server = http.createServer(requestHandler);

bayeux.attach(server);
server.listen(8000);
