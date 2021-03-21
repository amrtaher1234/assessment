function removeTrailingZeros(num = "") {
    for (let i = num.length - 1; i>=0; i--) {
        if (num.charAt(i) !== "0") {
            return num.substr(0, i);
        }
    }
    return num;
}

var helpers = {
    removeTrailingZeros
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = helpers
  }