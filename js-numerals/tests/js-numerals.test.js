const numberToWords = require('../solution');
const {oneDigitsTests, twoDigitsTests, nDigitsTests} = require('./js-numerals.test.json');

test.each(oneDigitsTests)("test with one digits" , (data) => {
  const {number, expectedResult} = data;
  expect(numberToWords(number)).toBe(expectedResult);
})

test.each(nDigitsTests)("test with N digits" , (data) => {
  const {number, expectedResult} = data;
  expect(numberToWords(number)).toBe(expectedResult);
})