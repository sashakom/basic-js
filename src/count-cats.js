module.exports = function countCats(matrix) {
  let result = 0;
  matrix.forEach((item) => {
    item.forEach((i) => {
      if (i == '^^') {
        result++;
      }
    });
  });
  return result;
}
