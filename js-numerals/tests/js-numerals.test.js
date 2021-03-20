const numberToWords = require('../solution');
const {invalidTests, nDigitsTests} = require('./js-numerals.test.json');


test.each(nDigitsTests)("test with N digits" , (data) => {
  const {number, expectedResult} = data;
  expect(numberToWords(number)).toBe(expectedResult);
})

test.each(invalidTests)("test with invalid cases (empty, two negatives, above 72 digits." , (data) => {
  const {number, expectedResult} = data;
  expect(numberToWords(number)).toBe(expectedResult);
})