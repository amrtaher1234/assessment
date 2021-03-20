const globals = require('./globals');

function solveForOneDigit(num) {
    if (typeof Number(num) !== 'number') {
        throw new Error('Should have a number param');
    }
    return `${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[num]}`;
}
function solveForTwoDigits(num) {
    if (typeof Number(num) !== 'number') {
        throw new Error('Should have a number param');
    }
    if (num < 20) {
        return `${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[num]}`
    }
    let firstDigit = Number(num.toString().charAt(0));
    let secondDigit = Number(num.toString().charAt(1));
    let numWithoutSecondDigit = firstDigit*10;
    return (`${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[numWithoutSecondDigit]} ${solveForOneDigit(secondDigit)}`);
}
function solveForThreeDigits(num) {
    let firstDigit = Number(num.toString().charAt(0));
    let twoDigitsNum = Number(num.toString().substr(1));
    return (`${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[firstDigit]} ${globals.THREE_DIGITS_NAME} ${solveForTwoDigits(twoDigitsNum)}`)
}
function solveForN(num) {
    let answer = '';
    const nameOfNumberWithDigitCount = globals.NAMES_OF_NUMBERS_WITH_THEIR_DIGIT_COUNT;
    while(num.length > 3) {
        let currentNumberLength = num.length;
        let solverFunction, numberOfDigitsToDismiss, nameOfNumber, valueToSend; 
        if (nameOfNumberWithDigitCount[currentNumberLength]) {
            solverFunction = solveForOneDigit;
            numberOfDigitsToDismiss = 1;
            valueToSend = num.substr(0,1);
        } else if (nameOfNumberWithDigitCount[currentNumberLength-1]) {
            solverFunction = solveForTwoDigits;
            numberOfDigitsToDismiss = 2;
            valueToSend = num.substr(0,2);
        } else {
            solverFunction = solveForThreeDigits;
            numberOfDigitsToDismiss = 3;
            valueToSend = num.substr(0,3);
        }
        nameOfNumber = nameOfNumberWithDigitCount[currentNumberLength] || 
        nameOfNumberWithDigitCount[currentNumberLength-1] || nameOfNumberWithDigitCount[currentNumberLength-2];

        answer+= ` ${solverFunction(Number(valueToSend))} ${nameOfNumber} and`;
        num = num.substr(numberOfDigitsToDismiss);
    }
    let lengthOfNum = num.length;
    let solverFunction = solvers[lengthOfNum];
    answer+= ` ${solverFunction(num)}`;
    return answer;
}
const solvers = {
    1: solveForOneDigit,
    2: solveForTwoDigits,
    3: solveForThreeDigits
};

function numberToWords(num) {
    if (Number(num) === 0) { 
        return 'zero';
    }
    let delimter = '';
    num = String(num);
    if (num.charAt(0) === '-') {
        num = num.substr(1);
        delimter = 'negative ';
    }
    num = num.replace(/^0+/, '');
    return delimter + solveForN(num).trim();
}

module.exports = numberToWords;