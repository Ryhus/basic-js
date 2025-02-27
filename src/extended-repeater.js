const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const additionSeparator = options.additionSeparator ?? "|";
  const separator = options.separator ?? "+";
  const additionPattern =
    options.addition === null ? "null" : options.addition ?? "";
  const stringPattern = str === null ? "null" : str ?? "";

  const addition = String(additionPattern)
    .concat(additionSeparator)
    .repeat(options.additionRepeatTimes ?? 1)
    .split(additionSeparator)
    .filter((element) => element != "")
    .join(additionSeparator);

  console.log(addition);

  const extendedString = String(stringPattern)
    .concat(addition)
    .concat(options.separator ?? "+")
    .repeat(options.repeatTimes ?? 1)
    .split(separator)
    .filter((element) => element != "")
    .join(separator);
  return extendedString;
}

module.exports = {
  repeater,
};
