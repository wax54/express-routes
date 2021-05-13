//web app
const express = require('express');
//errors
const { expressErrorHandler, pageNotFound } = require('./ExpressError');
//routes
const { handleMeanRequest, handleModeRequest, handleMedianRequest } = require('./routes');



const app = express();

//Examples
// app.get('/:file',(req, res)=>res.send(`You Searched For ${req.params.file}`));
// app.get('/dogs/', (req, res) => res.send('dogs'));


//handle requests
app.get('/mean', handleMeanRequest);

app.get('/mode', handleModeRequest);

app.get('/median', handleMedianRequest);

//handle errors
app.use(pageNotFound);
app.use(expressErrorHandler);

//start the server
app.listen(3000,()=>{
    console.log('Listening on port 3000');
})