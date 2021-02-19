const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition === undefined ? '' : String(options.addition);
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';
  let addArr = [];

  for (let i = 0; i < additionRepeatTimes; i += 1) {
    addArr.push(addition);
  }
  addArr = addArr.join(additionSeparator);

  str = str + addArr;

  strArray = [];

  for (let i = 0; i < repeatTimes; i++) {
    strArray.push(str);
  }

  return strArray.join(separator)
};
