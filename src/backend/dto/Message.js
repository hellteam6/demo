// Imports
var InvalidMessageException = module.require(
    '../exception/InvalidMessageException.js'
).InvalidMessageException;

/**
* Base message class, all sub-messages MUST inherited from here
*/
function Message(object) {
    if (object.type == undefined) {
        throw new InvalidMessageException(object);
    }

    for (var k in object) {
        this[k] = object[k];
    }

    this.getType = function() {
        return this.type;
    }
}

// Exports
module.exports.Message = Message;
