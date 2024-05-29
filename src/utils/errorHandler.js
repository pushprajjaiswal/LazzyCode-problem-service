const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/base.error");

function errorHandler(err, req, res, next) {

    console.log("My error handler !!")
    if(err instanceof BaseError){ // polymorfism  
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data : {} // becouse this is an exception so no data is going to be provided
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Something went wrong',
        error : err,
        data : {}
    })
}

module.exports = errorHandler;

// question :- chota sa concept hai isme ->
// lets talk about it there is special type of middleware error hanldling middleware 