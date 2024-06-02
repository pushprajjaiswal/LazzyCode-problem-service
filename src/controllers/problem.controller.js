const NotImplemented = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.json({message: 'Problem controller is up'});
}


async function addProblem(req, res, next) {
    try {
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newproblem
        })
    } catch(error) {
        next(error);
    }
}


async function getProblem(req, res, next) {
    try{
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully retrieved a problem',
            error: {},
            data: problem
        });
    }catch(error){
        next(error);
        // if we not put next it never be return response it stuck 
    }
}

async function getProblems(req, res, next){
    try{
        const response = await problemService.getAllProblems();
        
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problem',
            error: {},
            data: response
        });
    }catch(error){
        next(error); 
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
 * res.status -> returns the same response object with status property set
 * .json -> return the same response object which has status set but this json to be returned is also set
 * 
 */