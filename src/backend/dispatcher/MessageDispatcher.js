Message = module.require('../dto/Message.js').Message;

function registerMessageHandler(messageType, handler) {
    if (registerMessageHandler.htable == undefined) {
        registerMessageHandler.htable = {};
    }

    registerMessageHandler.htable[messageType] = handler;
}

function messageDispatcher(raw_message) {
    message = new Message(raw_message);
    message_type = message.getType();

    if (registerMessageHandler.htable != undefined &&
        registerMessageHandler.htable[message_type] != undefined) {
        handler = registerMessageHandler.htable[message_type];
        handler(message);
    }
}

// Exports
module.exports.messageDispatcher = messageDispatcher;
module.exports.registerMessageHandler = registerMessageHandler;
