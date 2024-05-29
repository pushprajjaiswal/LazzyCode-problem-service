const BaseError = require("./base.error");

class NotFoundError extends BaseError{
    constructor(details){
        super("Not-found-error", 404, "Resource not found", details);
    }
}

module.exports = NotFoundError;