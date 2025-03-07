const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const discardedIndices = new Set();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (discardedIndices.has(i)) {
      continue;
    }

    const element = arr[i];

    switch (element) {
      case "--discard-next":
        if (i + 1 < arr.length) {
          discardedIndices.add(i + 1);
        }
        break;

      case "--discard-prev":
        if (i - 1 >= 0 && !discardedIndices.has(i - 1)) {
          const prevValue = arr[i - 1];
          const lastIndex = result.lastIndexOf(prevValue);
          if (lastIndex !== -1) {
            result.splice(lastIndex, 1);
          }
        }
        break;

      case "--double-next":
        if (i + 1 < arr.length && !discardedIndices.has(i + 1)) {
          result.push(arr[i + 1]);
        }
        break;

      case "--double-prev":
        if (i - 1 >= 0 && !discardedIndices.has(i - 1)) {
          result.push(arr[i - 1]);
        }
        break;

      default:
        result.push(element);
        break;
    }
  }

  return result;
}

module.exports = {
  transform,
};
