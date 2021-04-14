/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var string1 = string.slice(0, firstIndex);
  var string2 = string.slice(firstIndex + 1, secondIndex);
  var string3 = string.slice(secondIndex + 1);
  var answer = string1 + string[secondIndex] + string2 + string[firstIndex] + string3;
  // console.log(string1);
  // console.log(string2);
  // console.log(string3);
  // console.log(answer);
  return answer;
}
