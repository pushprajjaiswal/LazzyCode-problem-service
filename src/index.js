const express = require('express');
const{PORT} = require('./config/server.config');

const bodyParser = require('body-parser');
// const BaseError = require('./errors/base.error');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended : true}));
app.use(bodyParser.text());


// If any request comes and route starts with /api, we map it to apiRouter
app.use('/api', apiRouter);


app.get('/ping',(req, res) =>{
    return res.json({message: 'Problem Service is alive'});
});

//last middleware if any error comes
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});
