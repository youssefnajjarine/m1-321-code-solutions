/* exported capitalizeWord */

function capitalizeWord(word) {
  var answer = word[0].toUpperCase() + word.slice(1).toLowerCase();

  if (word.toLowerCase() === 'javascript') {
    var jsAnswer = word[0].toUpperCase() + word.slice(1, 4).toLowerCase() + word[4].toUpperCase() + word.slice(5).toLowerCase();
    // console.log(jsAnswer);
    return jsAnswer;
  }

  // console.log(answer);
  return answer;
}
