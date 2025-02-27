const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return [];

  const renamedFiles = [];

  renamedFiles.push(names[0]);

  for (let i = 1; i < names.length; i += 1) {
    let cntRepeated = 0;
    let newElement = names[i];
    for (let element of renamedFiles) {
      if (newElement === element) {
        cntRepeated += 1;
        newElement = names[i] + `(${cntRepeated})`;
      }
    }
    if (cntRepeated === 0) {
      renamedFiles.push(names[i]);
    } else {
      renamedFiles.push(newElement);
    }
  }
  return renamedFiles;
}

module.exports = {
  renameFiles,
};
