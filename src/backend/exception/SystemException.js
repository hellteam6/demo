// Imports
BaseException = module.require('./BaseException.js').BaseException;

/**
*
*/
function SystemException(message) {
    this.base = BaseException;
    this.base(message);
}
SystemException.prototype = BaseException;

// Exports
module.exports.SystemException = SystemException;
