/**
 *  Precision Round off numbers
 *
 * @param {number} number
 * @param {number} precision
 * @return {number}
 */

function precisionRound(number, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

export default precisionRound;
