/* exported invert */

function invert(source) {
  var newObject = {};
  for (var [key, value] of Object.entries(source)) {
    newObject[value] = key;
  }
  return newObject;
}
