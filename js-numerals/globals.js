// data fetched from wiki-crawler.js script from this site https://en.wikipedia.org/wiki/Power_of_10
let NAMES_OF_NUMBERS_WITH_THEIR_DIGIT_COUNT = {
    2: "ten",
    3: "hundred",
    4: "thousand",
    7: "million",
    10: "billion",
    13: "trillion",
    16: "quadrillion",
    19: "quintillion",
    22: "sextillion",
    25: "septillion",
    28: "octillion",
    31: "nonillion",
    34: "decillion",
    37: "undecillion",
    40: "duodecillion",
    43: "tredecillion",
    46: "quattuordecillion",
    49: "quindecillion",
    52: "sexdecillion",
    55: "septendecillion",
    58: "octodecillion",
    61: "novemdecillion",
    64: "vigintillion",
    67: "unvigintillion",
    70: "duovigintillion",
  };
  let UNITS_NAMES = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ]
  let TENTH_NAMES = [
    "",
    "ten",
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninty",
    "",
    "eleven",
    "tweleve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ]
  var globals = {
    NAMES_OF_NUMBERS_WITH_THEIR_DIGIT_COUNT,
    THREE_DIGITS_NAME: 'hundred',
    UNITS_NAMES,
    TENTH_NAMES
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = globals
  }