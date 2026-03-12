const {sumArray, countWords, findMax, isDivisible, } = require('./functions.js');

describe ( "Tests for sumArray function", ()=>{
    it('should add positive values', () =>{
        expect(sumArray([1,2,3,4,5])).toBe(15);
    })

    it('should sum negative values', () =>{
        expect(sumArray([-1,-2,-3,-4,-5])).toBe(-15);
    })

    it(`should be 0`, () => {
        expect(sumArray([])).toBe(0);
    })

    it('should add with 0 as value', () =>{
        expect(sumArray([1,2,3,4,5, 0])).toBe(15);
    })
}); 

describe("Tests for countWords function", () =>{
    it('should count words', () =>{
        expect(countWords('Three Words Written')).toBe(3);
    })

    it('should ignore spaces', () =>{
        expect(countWords(' Three Words Written ')).toBe(3);
    })

    it('should count 0', () =>{
        expect(countWords(' ')).toBe(0);
    })

    it('should count spaced-out', () =>{
        expect(countWords(' Three    Words    Spaced-out ')).toBe(3);
    })
});

describe("Tests for findMax function", () =>{

    it(`should find out of positive numbers`, () =>{
        expect(findMax([5, 1, 1, 2, 3, 4,])).toBe(5)
    })

    it(`should find out of negative numbers`, () =>{
        expect(findMax([-5, 1, -1, -2, -3, -4,])).toBe(1)
    })

    it(`should find out of empty array`, () =>{
        expect(findMax([])).toBe(null)
    })

    it(`should find out of same number`, () =>{
        expect(findMax([5,5,5,5,5])).toBe(5)
    })
});

describe ("Tests for isDivisible function", ()=>{
    
    const error= 'No se puede dividir entre cero';

    it(`should be divisible`, ()=>{
        expect(isDivisible(25, 5)).toBe(true)
    })
    it(`should not be divisible`, ()=>{
        expect(isDivisible(18, 5)).toBe(false)
    })
    it(`should return error`, ()=>{
        expect(isDivisible(18, 0)).toBe(error)
    })
    it(`should be divisible with negative numbers`, ()=>{
        expect(isDivisible(-25, -5)).toBe(true)
    })

})