// Imports
BaseException = module.require('./BaseException.js').BaseException;

/**
*
*/
function InvalidMessageException(messageDto) {
    this.base = BaseException;
    this.base('Not a valid message: ' + messageDto);
}
InvalidMessageException.prototype = BaseException;

// Exports
module.exports.InvalidMessageException = InvalidMessageException;
