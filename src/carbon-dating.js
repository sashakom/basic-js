const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result = 0;
  if (typeof(sampleActivity) !== 'string' ||
   +sampleActivity > MODERN_ACTIVITY ||
   +sampleActivity <= 0 ||
   +sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  sampleActivity = parseFloat(sampleActivity);
  if (typeof(sampleActivity) !== 'number' || isNaN(sampleActivity)) {
    return false;
  }
  result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
  return result;
}
