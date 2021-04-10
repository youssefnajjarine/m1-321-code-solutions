/* exported reverseWord */

function reverseWord(word) {
  var newString = '';
  var array = [];
  for (var i = 0; i < word.length; i++) {
    array.unshift(word[i]);
    newString = array.join('');
  }
  return newString;
}
