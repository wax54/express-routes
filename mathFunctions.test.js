const { calculateMean: mean, calculateMode: mode, calculateMedian : median } = require('./mathFunctions');

describe('Mean Tests', () =>{
    test('calculates mean',() => {
        expect(mean([1,2,3])).toEqual(2);
    });
    test('negative numbers', () => {
        expect(mean([-1, -2, -3])).toEqual(-2);
        expect(mean([-1, 1])).toEqual(0);

    });
    test('single value in array input', () => {
        expect(mean([1])).toEqual(1);
    });
    test('empty array input', () =>{
        expect(mean([])).toBeFalsy();
    });
}); 

describe('Mode Tests', () => {
    test('Returns value that appears the Most', () => {
        expect(mode([1, 2, 2, 3])).toEqual(2);
    });
    test("Returns No Mode when there is no mode", () => {
        expect(mode([1, 2, 3])).toEqual("No Mode");
        expect(mode([1, 1, 1, 2, 2, 3, 2])).toEqual("No Mode");
    });
    test('negative numbers', () => {
        expect(mode([-1, -2, -2])).toEqual(-2);
        expect(mode([-1, 1, 7, 9, 4, 2, 7])).toEqual(7);
    });
    test('single value in array input', () => {
        expect(mode([1])).toEqual(1);
    });
    test('empty array input', () => {
        expect(mode([])).toBeFalsy();
    });
});

describe('Median Tests', () => {
    test('calculates Median of arrays with an even number of elements', () => {
        expect(median([1, 2, 2, 3])).toEqual(2);
        expect(median([1, 2, 3, 4])).toEqual(2.5);
        expect(median([1, 1])).toEqual(1);
        expect(median([0, 100])).toEqual(50);

    });
    test('calculates Median of arrays with an odd number of elements', () => {
        expect(median([1, 2, 3])).toEqual(2);
        expect(median([1, 2, 3, 4, 9])).toEqual(3);
        expect(median([1, 1, 100])).toEqual(1);
    });
    test('array does not need to be sorted', () => {
        expect(median([1, 3, 2])).toEqual(2);
        expect(median([9, 2, 1, 3, 4])).toEqual(3);
        expect(median([1, 100, 1])).toEqual(1);
    });
    test('negative numbers', () => {
        expect(median([-1, -2, -2])).toEqual(-2);
        expect(median([-1, 1, 7, 9, 4, 2, 7])).toEqual(4);
    });
    test('single value in array input', () => {
        expect(median([1])).toEqual(1);
    });
    test('empty array input', () => {
        expect(median([])).toBeFalsy();
    });
});