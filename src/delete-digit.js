const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberString = String(n);
  const numbers = [];
  for (let i = 1; i < numberString.length; i += 1) {
    numbers.push(Number(numberString.slice(0, i) + numberString.slice(i + 1)));
  }
  numbers.push(Number(numberString.slice(1)));
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit,
};
