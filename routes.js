const { parseNums } = require('./helper');
const { calculateMean, calculateMode, calculateMedian } = require('./mathFunctions');

function handleMeanRequest(req, res, next) {
    try {
        //get nums prop
        const nums = parseNums(req.query.nums, ',');
        //calculate mean
        const mean = calculateMean(nums);
        //return res as json
        res.json({ result: { operation: 'mean', value: mean } });
    } catch (e) {
        next(e);
    }
}


function handleModeRequest(req, res, next) {
    try {
        //get nums prop
        const nums = parseNums(req.query.nums, ',');
        //calculate mean
        const mode = calculateMode(nums);
        //return res as json
        res.json({ result: { operation: 'mode', value: mode } });
    } catch (e) {
        next(e);
    }
}

function handleMedianRequest(req, res, next) {
    try {
        //get nums prop
        const nums = parseNums(req.query.nums, ',');
        //calculate mean
        const median = calculateMedian(nums);
        //return res as json
        res.json({ result: { operation: 'median', value: median } });
    } catch (e) {
        next(e);
    }
}

module.exports = { handleMeanRequest, handleModeRequest, handleMedianRequest}