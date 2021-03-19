const globals = require('./globals');

function solveForOneDigit(num) {
    if (typeof num !== 'number') {
        throw new Error('Should have a number param');
    }
    return num > 0 ? `${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[num]}` : '';
}
function solveForTwoDigits(num = 0) {
    if (typeof num !== 'number') {
        throw new Error('Should have a number param');
    }
    if (num < 20) {
        return `${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[num]}`
    }
    let firstDigit = Number(num.toString().charAt(0));
    let secondDigit = Number(num.toString().charAt(1));
    // 23
    let numWithoutSecondDigit = firstDigit*10;
    return (`${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[numWithoutSecondDigit]} ${solveForOneDigit(secondDigit)}`).trim();
}
function solveForThreeDigits(num = 0) {
    let firstDigit = Number(num.toString().charAt(0));
    let twoDigitsNum = Number(num.toString().substr(1));
    return (`${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[firstDigit]} ${globals.THREE_DIGITS_NAME} ${solveForTwoDigits(twoDigitsNum)}`)
}