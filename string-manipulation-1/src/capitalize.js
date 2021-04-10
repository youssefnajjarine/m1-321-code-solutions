/* exported capitalize */

function capitalize(word) {
  var answer = word[0].toUpperCase() + word.slice(1).toLowerCase();

  return answer;
}
