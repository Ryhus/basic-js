const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let encodedLine = [];
  let previousLetter;
  const numbers = [];
  for (let letter of str) {
    previousLetter === letter ? (count += 1) : (count = 1);
    previousLetter = letter;
    numbers.push(count);
  }
  numbers.push(0);
  for (let i = 1; i < numbers.length; i += 1) {
    console.log(numbers[i], numbers[i - 1]);
    if (numbers[i] < numbers[i - 1]) {
      encodedLine.push(String(numbers[i - 1]), str[i - 1]);
      console.log(encodedLine);
    } else if (numbers[i - 1] === numbers[i]) encodedLine.push(str[i - 1]);
  }
  console.log(numbers);
  return encodedLine.filter((element) => element != "1").join("");
}

module.exports = {
  encodeLine,
};
