const { StatusCodes, BAD_REQUEST } = require('http-status-codes');
const NotFoundError = require('../errors/NotFoundError');
const NotImplemented = require('../errors/notimplemented.error');

function pingProblemController(req, res) {
    return res.json({message : 'Problem controller up'});
}

function addProblem(req, res, next) {
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }catch(error){
        next(error);
        // if we not put next it never be return response it stuck 
    }
}
function getProblem(req, res) {
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }catch(error){
        next(error);
        // if we not put next it never be return response it stuck 
    }
}

function getProblems(req, res){
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }catch(error){
        next(error);
        // if we not put next it never be return response it stuck 
    }
}

function deleteProblem(req, res) {
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }catch(error){
        next(error);
        // if we not put next it never be return response it stuck 
    }
}

function updateProblem(req ,res) {
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }catch(error){
        next(error);
        // if we not put next it never be return response it stuck 
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}


/**
 * 
 * res 
 * 
 */