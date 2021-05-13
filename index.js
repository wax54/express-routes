const express = require('express');
const { expressErrorHandler, pageNotFound } = require('./ExpressError');
const { calculateMean, calculateMode, calculateMedian } = require('./mathFunctions');
const { parseNums } = require('./helper');

const app = express();

//Examples
// app.get('/:file',(req, res)=>res.send(`You Searched For ${req.params.file}`));
// app.get('/dogs/', (req, res) => res.send('dogs'));

app.get('/mean',(req, res, next)=>{
    try{
        //get nums prop
        const nums = parseNums(req.query.nums, ',');
        //calculate mean
        const mean = calculateMean(nums);
        //return res as json
        res.json({ result:{operation:'mean', value: mean}});
    } catch (e) {
        next(e);
    }
});



app.get('/mode', (req, res, next) => {
    try {
        //get nums prop
        const nums = parseNums(req.query.nums, ',');
        //calculate mean
        const mode = calculateMode(nums);
        //return res as json
        res.json({result:{ operation: 'mode', value: mode}});
    } catch (e) {
        next(e);
    }
});

app.get('/median', (req, res, next) => {
    try {
        //get nums prop
        const nums = parseNums(req.query.nums, ',');
        //calculate mean
        const median = calculateMedian(nums);
        //return res as json
        res.json({ result:{ operation: 'median', value: median }});
    } catch (e) {
        next(e);
    }
});


app.use(pageNotFound);
app.use(expressErrorHandler);

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})