const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const allDomains = [];
  const resultObject = {};
  for (let adress of domains) {
    let concatElement = "";
    const arr1 = adress
      .split(".")
      .reverse()
      .map((element) => "." + element)
      .forEach((element) => {
        concatElement += element;
        allDomains.push(concatElement);
      });
  }
  for (let element of allDomains) {
    if (!resultObject[element]) {
      resultObject[element] = 0;
    }
    resultObject[element] += 1;
  }
  return resultObject;
}

module.exports = {
  getDNSStats,
};
