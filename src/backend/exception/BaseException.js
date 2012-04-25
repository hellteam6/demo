/**
* All backend exception must be inherited from this
* class
*/
function BaseException(message) {
    this.message = message;

    this.getMessage = function() {
        return this.message;
    }
}

// Exports
module.exports.BaseException = BaseException;
