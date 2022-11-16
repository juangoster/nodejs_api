const { ValidationError } = require("sequelize");

function logErrors (err, req, res, next){
    console.log('logErrors');
    console.log(err);
    next(err);
}

function errorHandler (err, req, res, next){
    console.log('errorHandler');
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}

function boomErrorHandler (err, req, res, next){

    if (err.isBoom){
        console.log('es un error con boom')
        const {output} = err;
        res.status(output.statusCode).json(output.payload);
    }next(err);

}

function ormErrorHandler (err, req, res, next){
    if (err instanceof ValidationError){
        res.status(409).json({
            statusCode: 409,
            message: err.name,
            errors: err.errors
        });
    }
    next(err);
}

module.exports = {logErrors, errorHandler, boomErrorHandler, ormErrorHandler}