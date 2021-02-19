const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
   return this.chain.length;
  },

  addLink(value = '') {
    this.chain.push('( ' + value + ' )');
    return this;
  },

  removeLink(position) {
    if (!this.chain[position]) {
      this.chain.length = 0;
      throw new Error();
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    if (this.chain.length === 0) return this;
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let res = this.chain.join("~~");
    this.chain.length = 0;
    return res;
  }
};

module.exports = chainMaker;
