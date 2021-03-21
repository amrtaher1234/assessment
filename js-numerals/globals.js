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
  
  let NAMES_OF_DIGITS_BELOW_HUNDRED = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "tweleve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "ninteen",
    20: "twenty",
    30: "thirty",
    40: "fourty",
    50: "fifty",
    60: "sixty",
    70: "sevnty",
    80: "eighty",
    90: "ninty",
  };

  var globals = {
    NAMES_OF_DIGITS_BELOW_HUNDRED,
    NAMES_OF_NUMBERS_WITH_THEIR_DIGIT_COUNT,
    THREE_DIGITS_NAME: 'hundred',
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = globals
  }