/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i < array.length - count) {
      // console.log(array[i]);
      newArray.push(array[i]);
    }
    // console.log(array[i]);
  }
  // console.log(newArray);
  return newArray;
}
