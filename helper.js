const { ExpressError } = require('./ExpressError');

function makeArrayOfNumbers(arr) {
    const arrayOfNums = [];
    const badInputs = [];
    for (let text of arr) {
        text = text.trim();
        if (text == '') {
            continue;
        }
        const number = Number(text);
        if (isNaN(number)) {
            badInputs.push(text);
        } else {
            arrayOfNums.push(number);
        }
    }
    return { nums: arrayOfNums, nonNums: badInputs }
}

function parseNums(numsString, parser = ',') {
    //if not nums
    if (!numsString)
        //400 bad request 'nums are req'
        throw new ExpressError("Query Param 'Nums' are required", 400);

    //split prop based on commas into array
    const numsArr = numsString.split(parser);
    const result = makeArrayOfNumbers(numsArr);

    //if there are only number valuesin the array
    if (result.nonNums.length == 0) {
        if (result.nums.length) {
            return result.nums;
        } else {
            throw new ExpressError("Query Param 'Nums' malformed", 400);
        }
    } else {
        //if there are non number values
        const msgs = [];
        //for each bad input
        for (let badInput of result.nonNums) {
            //400 '<non number> is not a number'
            msgs.push(`'${badInput}' is not a number`);
        }
        const msg = msgs.join(', and ');
        throw new ExpressError(msg, 400);
    }
}

module.exports = { parseNums };