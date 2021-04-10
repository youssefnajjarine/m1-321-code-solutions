/* exported getValues */
function getValues(object) {
  var newArray = [];
  for ( var property in object) {
    newArray.push(object[property]);
  }
  return newArray
}
