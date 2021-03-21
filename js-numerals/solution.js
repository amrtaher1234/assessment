if (typeof require !== "undefined" && typeof require !== null) {
  var globals = require("./globals");
  var helpers = require("./helpers");
}

function solveForOneDigit(num) {
  return `${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[num]}`;
}
function solveForTwoDigits(num) {
  if (num < 20) {
    return `${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[num]}`;
  }
  let firstDigit = Number(num.toString().charAt(0));
  let secondDigit = Number(num.toString().charAt(1));
  let numWithoutSecondDigit = firstDigit * 10;
  return `${
    globals.NAMES_OF_DIGITS_BELOW_HUNDRED[numWithoutSecondDigit]
  } ${solveForOneDigit(secondDigit)}`;
}
function solveForThreeDigits(num) {
  let firstDigit = Number(num.toString().charAt(0));
  let twoDigitsNum = Number(num.toString().substr(1));
  return `${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[firstDigit]} ${
    globals.THREE_DIGITS_NAME
  } ${solveForTwoDigits(twoDigitsNum)}`;
}
function solveForN(num) {
  if (!num || !num.length) {
    return '';
  }
  let answer = "";
  const nameOfNumberWithDigitCount =
    globals.NAMES_OF_NUMBERS_WITH_THEIR_DIGIT_COUNT;
  while (num.length > 3) {
    let currentNumberLength = num.length;
    let solverFunction, numberOfDigitsToDismiss, nameOfNumber, valueToSend;
    if (nameOfNumberWithDigitCount[currentNumberLength]) {
      solverFunction = solveForOneDigit;
      numberOfDigitsToDismiss = 1;
      valueToSend = num.substr(0, 1);
    } else if (nameOfNumberWithDigitCount[currentNumberLength - 1]) {
      solverFunction = solveForTwoDigits;
      numberOfDigitsToDismiss = 2;
      valueToSend = num.substr(0, 2);
    } else {
      solverFunction = solveForThreeDigits;
      numberOfDigitsToDismiss = 3;
      valueToSend = num.substr(0, 3);
    }
    nameOfNumber =
      nameOfNumberWithDigitCount[currentNumberLength] ||
      nameOfNumberWithDigitCount[currentNumberLength - 1] ||
      nameOfNumberWithDigitCount[currentNumberLength - 2];

    answer += ` ${solverFunction(Number(valueToSend))} ${nameOfNumber} and`;
    num = num.substr(numberOfDigitsToDismiss);
  }
  let lengthOfNum = num.length;
  let solverFunction = solvers[lengthOfNum];
  answer += ` ${solverFunction(num)}`;
  return answer;
}
function solveForAfterDecimal(num) {
  num = helpers.removeTrailingZeros(num);
  if (!num.length) return '';
  let numLength = num.length + 1; // for the decimal point = 5
  let delimter = '';
  let digitNameIndex = numLength ;
  let answer = `${solveForN(helpers.removeLeadingZeros(num))}`;
  if (globals.NAMES_OF_NUMBERS_WITH_THEIR_DIGIT_COUNT[digitNameIndex]) {
    digitNameIndex = numLength;
  }
  else if (globals.NAMES_OF_NUMBERS_WITH_THEIR_DIGIT_COUNT[digitNameIndex -1]) {
    delimter = 'ten-';
    digitNameIndex -=1;
  } else {
    delimter = 'hundered-'
    digitNameIndex -=2;
  }
  answer += ` ${delimter}${globals.NAMES_OF_NUMBERS_WITH_THEIR_DIGIT_COUNT[digitNameIndex]}ths`;
  return answer;
}
const solvers = {
  1: solveForOneDigit,
  2: solveForTwoDigits,
  3: solveForThreeDigits,
};
function validateInput(num) {
  let result = {
    error: false,
    message: "",
  };
  if (num.trim().length !== num.length || !Number.isFinite(Number(num))) {
    result.error = true;
    result.message = "Invalid Number";
  }
  if (num.length > 72) {
    result.error = true;
    result.message =
      "Input should be less than 72 chars as digit names in wikipedia is only up to duovigintillion!";
  }
  return result;
}
function numberToWords(num = '') {
  num = String(num);
  const validationResult = validateInput(num);
  if (validationResult.error) {
    return validationResult.message;
  }
  if (!num.length) return "";
  if (parseFloat(num) === 0) {
    return "zero";
  }
  let afterDecimalNumber = num.split('.')[1] || '';
  num = num.split('.')[0];
  let delimter = "";
  if (num.charAt(0) === "-") {
    num = num.substr(1);
    delimter = "negative";
  }
  num = helpers.removeLeadingZeros(num);
  let wholeNumberWords = `${delimter}${solveForN(num)}`.trim();
  let afterDecimalPointWords = solveForAfterDecimal(afterDecimalNumber);
  let seperator = wholeNumberWords.length && afterDecimalPointWords.length ? ' (and.)' : '';
  return `${wholeNumberWords}${seperator}${afterDecimalPointWords}`.trim();
}
if (typeof require !== "undefined" && typeof module !== "undefined") {
  module.exports = {
    numberToWords,
    solveForAfterDecimal
  };
}
