/* exported numVowels */

function numVowels(string) {
  var answer = 0;
  for (var i = 0; i < string.length; i++) {
    var letter = string[i].toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      answer += 1;
    }
  }
  // console.log(answer);
  return answer;
}
