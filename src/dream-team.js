const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false;
  return members.reduce((acc, item) => {
    if (typeof(item) === 'string') {
      return acc += item.trim()[0].toUpperCase();
    }
    return acc;
  }, '').split('').sort().join('');
};
