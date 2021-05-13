const { parseNums, makeArrayOfNumbers } = require('./helper');
const { ExpressError } = require('./ExpressError');

describe('parseNums Tests', () =>{
    test('If numString is empty, throws error',() => {
        expect(parseNums).toThrow(ExpressError);
    });
    test('returned values are numbers', () => {
        expect(parseNums('1,2,3,4,5')[0]).toBe(1);
        expect(parseNums('1,2,3,4,5')[0]).not.toBe('1');
    });
    test('parses numbers out of string based on commas', () => {
        expect(parseNums('1,2,3,4,5')).toEqual([1,2,3,4,5]);
        expect(parseNums('1,100,8.5,4.13,5003')).toEqual([1, 100, 8.5, 4.13, 5003]);
    });
    test('other parsers (besides the default ",") can be passed in', () => {
        expect(parseNums('1%2%3%4%5', '%')).toEqual([1, 2, 3, 4, 5]);
    });
    test('throws error on non number input', () => {
        expect(() => {parseNums('1,2,h,4,5')}).toThrow(ExpressError);
    });

    test('throws error if only commas recieved', () => {
        expect(() => { parseNums(',,,,') }).toThrow(ExpressError);
    });

    test('Empty String input', () => {
        expect(() => { parseNums('') }).toThrow(ExpressError);
    });
}); 


describe('makeArrayOfNumbers Tests', () => {
    test('Ignores empty elements', () => {
        expect(makeArrayOfNumbers(['','1','2','']).nums).toEqual([1,2]);
    });
    test('returns an array of numbers and an array of non numbers', () => {
        const result = makeArrayOfNumbers(['hello', '1', '2', '', 'badaBing']);
        expect(result.nums).toEqual([1, 2]);
        expect(result.nonNums).toEqual(['hello','badaBing']);

    });
    test('nums array are all numbers', () => {
        expect(makeArrayOfNumbers(['1']).nums[0]).toEqual(expect.any(Number));
        });

});


