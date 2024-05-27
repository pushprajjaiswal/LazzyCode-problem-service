const express = require('express');

const problemRouter = require('./problems.routes');


const v1Router = express.Router();

// If any request cpmes and route continous with /problems, we map it to problemRouter
v1Router.use('/problems', problemRouter);

module.exports = v1Router;