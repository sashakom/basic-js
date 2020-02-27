module.exports = function createDreamTeam(members) {
  let result = [];
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach((item) => {
    if (typeof(item) === 'string') {
      result.push(item.trim()[0].toUpperCase());
    } else {
      return false;
    }
  });
  return result.sort().join('');
}
