const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",
  chainLength: 0,

  getLength() {
    return this.chainLength;
  },
  addLink(value = " ") {
    if (this.chain === "") {
      this.chain += `( ${value} )`;
      this.chainLength += 1;
    } else {
      this.chain += `~~( ${value} )`;
      this.chainLength += 1;
    }

    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      position > this.chainLength ||
      position < 1
    ) {
      this.chain = "";
      this.chainLength = 0;
      throw new Error("You can't remove incorrect link!");
    }
    const arr = this.chain.split("~~");

    arr.splice(position - 1, 1);
    this.chain = arr.join("~~");
    this.chainLength -= 1;
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    const chain = this.chain;
    this.chain = "";
    this.chainLength = 0;
    return chain;
  },
};

module.exports = {
  chainMaker,
};
