const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  _process(message, key, encrypt) {
    if (message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");

    const msg = message.toUpperCase();
    const keyShifts = key
      .toUpperCase()
      .split("")
      .map((c) => c.charCodeAt(0) - 65)
      .filter((c) => c >= 0 && c <= 25);

    let result = [];
    let keyIndex = 0;

    for (const c of msg) {
      const code = c.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        const shift = keyShifts[keyIndex % keyShifts.length];
        const base = code - 65;
        const modified = encrypt
          ? (base + shift) % 26
          : (base - shift + 26) % 26;
        result.push(String.fromCharCode(modified + 65));
        keyIndex++;
      } else {
        result.push(c);
      }
    }

    return this.direct ? result.join("") : result.reverse().join("");
  }

  encrypt(message, key) {
    return this._process(message, key, true);
  }

  decrypt(message, key) {
    return this._process(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
