var SystemException = module.require('./exception/SystemException.js').SystemException;
var Message = module.require('./dto/Message.js').Message
var messageDispatcher = module.require('./dispatcher/MessageDispatcher.js').messageDispatcher;

var socket = require('socket.io');

/**
* This is the entry point for node
* program. This code starts the WebSocket given a
* port and starts dispatching messages
*/
function Main(argv) {
    var port = argv[2];
    if (port < 1 || port > 65535) {
        throw new SystemException('Bad port');
    }

    app = socket.listen(parseInt(port));
    app.sockets.on('connection', function(socket) {
        socket.on('message', messageDispatcher);
    });
}

Main(process.argv);
