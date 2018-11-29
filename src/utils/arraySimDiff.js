/**
 *  Array symmetrical difference
 *
 * @param {array} arr1
 * @param {array} arr2
 * @return {array}
 */

function arraySimDiff() {
  function simDiff(arr1, arr2) {
    return arr1
      .filter(val => !arr2.includes(val))
      .concat(arr2.filter(val => !arr1.includes(val)));
  }

  const diffArr = Array.from(arguments).reduce(simDiff);

  return [...new Set([...diffArr])];
}

export default arraySimDiff
