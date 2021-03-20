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
    let numWithoutSecondDigit = firstDigit*10;
    return (`${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[numWithoutSecondDigit]} ${solveForOneDigit(secondDigit)}`).trim();
}
function solveForThreeDigits(num = 0) {
    let firstDigit = Number(num.toString().charAt(0));
    let twoDigitsNum = Number(num.toString().substr(1));
    return (`${globals.NAMES_OF_DIGITS_BELOW_HUNDRED[firstDigit]} ${globals.THREE_DIGITS_NAME} ${solveForTwoDigits(twoDigitsNum)}`)
}
const solvers = {
    1: solveForOneDigit,
    2: solveForTwoDigits,
    3: solveForThreeDigits
};
function solveForN(num = 0) {
    num = num.toString();
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

        answer+= ` ${solverFunction(Number(valueToSend))} ${nameOfNumber}`;
        num = num.substr(numberOfDigitsToDismiss);
    }
    answer+= ` ${solveForNumbersBelow4Digits(Number(num))}`;
    return answer.trim();
}
function solveForNumbersBelow4Digits(num) {
    let lengthOfNum = num.toString().length;
    let solverFunction = solvers[lengthOfNum];
    return solverFunction(num);
}
function main(num = 0) {
    let lengthOfNum = num.toString().length;
    let solverFunction = solvers[lengthOfNum] ?? solveForN;
    return solverFunction(num);
}

let tests = [
    "992345661212121212121234566121212121212123456612121212121123456789098098",
];
tests.forEach(t => console.log(main(t)));