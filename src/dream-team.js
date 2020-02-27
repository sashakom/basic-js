module.exports = function createDreamTeam(members) {
  let result = '';
  members.sort();
  members.forEach((item) => {
    if (typeof(item) === 'string') {
      result += item[0].toUpperCase();
    } else {
      return false;
    }
  });
  return result;
}
