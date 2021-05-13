const { handleMeanRequest, handleModeRequest, handleMedianRequest } = require('./routes');

let responseData; 
let errorData;

let req;
let res;
let next;

describe('Mean Route Tests', () =>{

    beforeEach(() => {
        responseData = undefined;
        errorData = undefined;
        req = { query: { nums: '1,2,3' } };
        res = { json: (jsonData) => { responseData = jsonData } };
        next = (data) => { errorData = data };
    });

    test('returns mean',() => {
        handleMeanRequest(req, res, next);
        expect(responseData).
            toEqual({ result: 
                        { operation: 'mean', 
                            value: 2 
                        } 
                    });
    });

    test('Returns error on empty input', () => {
        req.query.nums = undefined;
        handleMeanRequest(req, res, next);
        expect(errorData.msg).
            toEqual("Query Param 'Nums' are required");
        expect(errorData.status).
            toEqual(400);
    });

    test('Returns error on non Number input', () => {
        req.query.nums = '1,2,3,h,5';
        handleMeanRequest(req, res, next);
        expect(errorData.msg).
            toEqual("'h' is not a number");
        expect(errorData.status).
            toEqual(400);
    });

}); 




describe('Mode Route Tests', () => {

    beforeEach(() => {
        responseData = undefined;
        errorData = undefined;
        req = { query: { nums: '1,2,2,3' } };
        res = { json: (jsonData) => { responseData = jsonData } };
        next = (data) => { errorData = data };
    });

    test('returns mode', () => {
        handleModeRequest(req, res, next);
        expect(responseData).
            toEqual({
                result:
                {
                    operation: 'mode',
                    value: 2
                }
            });
    });

    test('returns No Mode if no mode', () => {
        req.query.nums = '1,2,3';
        handleModeRequest(req, res, next);
        expect(responseData).
            toEqual({
                result:
                {
                    operation: 'mode',
                    value: 'No Mode'
                }
            });
    });


    test('Returns error on empty input', () => {
        req.query.nums = undefined;
        handleModeRequest(req, res, next);
        expect(errorData.msg).
            toEqual("Query Param 'Nums' are required");
        expect(errorData.status).
            toEqual(400);
    });

    test('Returns error on non Number input', () => {
        req.query.nums = '1,2,3,h,5';
        handleModeRequest(req, res, next);
        expect(errorData.msg).
            toEqual("'h' is not a number");
        expect(errorData.status).
            toEqual(400);
        });

});


describe('Median Route Tests', () => {

    beforeEach(() => {
        responseData = undefined;
        errorData = undefined;
        req = { query: { nums: '1,2,3' } };
        res = { json: (jsonData) => { responseData = jsonData } };
        next = (data) => { errorData = data };
    });

    test('returns median', () => {
        handleMedianRequest(req, res, next);
        expect(responseData).
            toEqual({
                result:
                {
                    operation: 'median',
                    value: 2
                }
            });
    });

    test('Returns error on empty input', () => {
        req.query.nums = undefined;
        handleMedianRequest(req, res, next);
        expect(errorData.msg).
            toEqual("Query Param 'Nums' are required");
        expect(errorData.status).
            toEqual(400);
    });

    test('Returns error on non Number input', () => {
        req.query.nums = '1,2,3,h,5';
        handleMedianRequest(req, res, next);
        expect(errorData.msg).
            toEqual("'h' is not a number");
        expect(errorData.status).
            toEqual(400);
    });

});
