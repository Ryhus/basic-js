const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!arr.some((element) => element === -1)) return arr.sort((a, b) => a - b);
  const minus1indexes = [];
  arr.forEach((element, index) => {
    if (element === -1) minus1indexes.push(index);
  });

  arr = arr.filter((element) => element !== -1).sort((a, b) => a - b);

  minus1indexes.forEach((element) => {
    if (element === 0) {
      arr = [-1].concat(arr);
    } else {
      arr = arr.slice(0, element).concat([-1]).concat(arr.slice(element));
    }
  });
  return arr;
}

module.exports = {
  sortByHeight,
};
