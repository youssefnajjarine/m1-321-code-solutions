/* exported capitalizeWords */

function capitalizeWords(string) {
  var answer = [];
  var newArray = string.split(' ');
  // console.log(newArray);
  for (var i = 0; i < newArray.length; i++) {
    answer.push(newArray[i][0].toUpperCase() + newArray[i].slice(1).toLowerCase());
    // console.log(answer);

    // console.log(answer2);
  }
  var answer2 = answer.join(' ');
  // console.log(answer2);
  return answer2;
}
