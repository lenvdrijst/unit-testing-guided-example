const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(2,2);
        expect(result).toBe(4);
    });

    test("should return a negative number when one integer is negative and one integer is positive", () => {
        const result = multiply(2,-2);
        expect(result).toBe(-4);
    });

    test("should return a value of zero when mulitplied by 0", () => {
        const result = multiply(2,0);
        expect (result).toBe(0);
    })
  });