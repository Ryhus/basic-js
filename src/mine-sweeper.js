const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const flatArr = matrix.flat();
  const rowLength = matrix[0].length;

  const countBombsArr = [];
  let countBombs = 0;
  for (let i = 0; i < flatArr.length; i += 1) {
    const reminder = i % rowLength;
    if (reminder !== 0) {
      if (flatArr[i - 1] === true) countBombs += 1;
      if (flatArr[i - (rowLength + 1)] === true) countBombs += 1;
      if (flatArr[i + (rowLength - 1)] === true) countBombs += 1;
    }
    if (reminder !== rowLength - 1) {
      if (flatArr[i + 1] === true) countBombs += 1;
      if (flatArr[i - (rowLength - 1)] === true) countBombs += 1;
      if (flatArr[i + (rowLength + 1)] === true) countBombs += 1;
    }

    if (flatArr[i - rowLength] === true) countBombs += 1;
    if (flatArr[i + rowLength] === true) countBombs += 1;

    countBombsArr.push(countBombs);
    countBombs = 0;
  }

  let k = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      matrix[i][j] = countBombsArr[k];
      k += 1;
    }
  }
  return matrix;
}

module.exports = {
  minesweeper,
};
