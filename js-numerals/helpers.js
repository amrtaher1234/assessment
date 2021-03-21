function removeTrailingZeros(num = "") {
    for (let i = num.length - 1; i>=0; i--) {
        if (num.charAt(i) !== "0") {
            return num.substr(0, i+1);
        }
    }
    return num;
}
function removeLeadingZeros(num = "") {
    return num.replace(/^0+/, "");
}
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

var helpers = {
    removeTrailingZeros,
    removeLeadingZeros,
    pipe
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = helpers
  }