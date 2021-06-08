/* exported chunk */

function chunk(array, size) {
  let answerArray = [];

  for (let i = 0; i < array.length; i+=size) {
    let subArray = [];
    for (let j = 0; j < size; j++) {
      if ((i + j)  < array.length) {

      subArray.push(array[i + j]);
      }
    }
    answerArray.push(subArray);
  }



  return answerArray;
}
