const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const commonLetters = new Set(s1.split("").concat(s2.split("")));
  console.log(commonLetters);
  const countLetterFirst = {};
  const countLetterSecond = {};
  for (let letter of s1) {
    if (!countLetterFirst[letter]) {
      countLetterFirst[letter] = 0;
    }
    countLetterFirst[letter] += 1;
  }
  for (let letter of s2) {
    if (!countLetterSecond[letter]) {
      countLetterSecond[letter] = 0;
    }
    countLetterSecond[letter] += 1;
  }
  console.log(countLetterSecond);
  let sum = 0;
  commonLetters.forEach((element) => {
    if (countLetterFirst[element] && countLetterSecond[element]) {
      countLetterFirst[element] < countLetterSecond[element]
        ? (sum += countLetterFirst[element])
        : (sum += countLetterSecond[element]);
    }
  });
  return sum;
}

module.exports = {
  getCommonCharacterCount,
};
