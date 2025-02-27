const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const cntElements = matrix[0].length;
  const flatArr = matrix.flat();
  for (let i = flatArr.length - 1; i >= 0; i -= 1) {
    if (flatArr[i - cntElements] !== 0) sum += flatArr[i];
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
