/**
 *  returns past tense of given verb
 *
 * @param {string} word
 * @return {string}
 */

function toPastTense(word) {
  return (
    word
      .replace(/([^aeiouy])y$/, "$1i")
      .replace(/([^aeiouy][aeiou])([^aeiouy])$/, "$1$2$2")
      .replace(/e$/, "") + "ed"
  );
}

export default toPastTense;
