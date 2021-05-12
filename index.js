const express = require('express');
const {ExpressError, expressErrorHandler, pageNotFound} = require('./ExpressError');
const app = express();

//Examples
// app.get('/:file',(req, res)=>res.send(`You Searched For ${req.params.file}`));
// app.get('/dogs/', (req, res) => res.send('dogs'));
function makeArrayOfNumbers(arr){
    const arrayOfNums = [];
    const badInputs = [];
    for(let text of arr){
        const number = Number(text);
        if (isNaN(number)){
            badInputs.push(text);
        } else {
            arrayOfNums.push(number);
        }
    }
    return {nums: arrayOfNums, nonNums: badInputs}
}

function parseNums(numsString, parser=','){
    //if not nums
    if(!numsString) 
        //400 bad request 'nums are req'
        throw new ExpressError('Query Param "Nums" are required', 400);
    
    //split prop based on commas into array
    const numsArr = numsString.split(parser);
    const result = makeArrayOfNumbers(numsArr);
    //if there are only number valuesin the array
    if (result.nonNums.length == 0){
        return result.nums;
    } else {
        //if there are non number values
        let msg = '';
        //for each bad input
        for(let badInput of result.nonNums.furtherInfo){
            //400 '<non number> is not a number'
            msg =+ `"${badInput}" is not a number`;
        }
        throw new ExpressError(msg, 400);
    }

}

function calculateMean(nums){
    const total = nums.reduce((acc, next) => acc + next);
    const count = nums.length;
    return total/count;
}
app.get('/mean',(req, res, next)=>{
    try{
        //get nums prop
        const nums = parseNums(req.query.nums, ',');
        //calculate mean
        const mean = calculateMean(nums);
        //return res as json
        res.json({ result:{operation:'mean',value: mean}});
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
        const mean = calculateMean(nums);
        //return res as json
        res.json({ result:{ operation: 'median', value: median }});
    } catch (e) {
        next(e);
    }
});


app.use(pageNotFound);
app.use(expressErrorHandler);

app.listen(3000,()=>{
    console.log('listening on port 3000');
})